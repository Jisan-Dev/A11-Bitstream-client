import { Button } from '@/components/ui/button';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isSameAuthor, setIsSameAuthor] = useState(false);
  const [commented, setCommented] = useState(false);

  const { data: blog } = useQuery({
    queryFn: () => getData(),
    queryKey: ['blog', id],
  });
  const { data: comments = [] } = useQuery({
    queryFn: () => getComments(),
    queryKey: ['comment', commented, id],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/blogs/${id}`);
    return data;
  };

  const getComments = async () => {
    const { data } = await axiosSecure(`/comments/${id}`);
    return data;
  };

  useEffect(() => {
    if (blog?.author?.email === user?.email) setIsSameAuthor(true);
  }, [blog?.author?.email, user?.email]);

  const handleComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const commentData = Object.fromEntries(formData.entries());
    commentData.blogId = blog?._id;
    commentData.author = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };
    console.log(commentData);
    try {
      const { data } = await axiosSecure.post(`/add-comment`, commentData);
      console.log(data);
      setCommented(!commented);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mx-auto my-10">
      <div className="px-4 lg:px-16">
        <h2 className="text-4xl font-semibold text-primary mb-2">{blog?.blog_title}</h2>
        <p className="text-lg font-medium text-primary/80 mb-2">
          <strong>Author : </strong> {blog?.author?.name}
        </p>
        <p className="text-lg font-medium text-primary/80 max-w-[900px] mb-6">{blog?.shortDescription}</p>
        <div className="rounded-xl overflow-hidden">
          <img src={blog?.imageUrl} className="w-full object-cover h-[450px]" alt="" />
        </div>
        <div className="lg:px-20">
          <p className="text-lg font-medium text-primary/80 my-4">{blog?.longDescription}</p>
          {isSameAuthor && <Button>Update</Button>}

          {/* comment section */}

          <form onSubmit={handleComment} className="flex gap-2 mt-16 relative">
            <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="user image" />
            {isSameAuthor ? (
              <div className="rounded-lg font-medium bg-red-300 flex items-center p-2">
                <p>Can not comment on own blog.</p>
              </div>
            ) : (
              <>
                <textarea name="comment" id="" className="w-full h-28 rounded-md" placeholder="Add a comment"></textarea>
                <Button type="submit" className="absolute text-2xl right-3 bottom-3 cursor-pointer rounded-full">
                  <IoIosSend />
                </Button>
              </>
            )}
          </form>

          {comments.map((comment) => {
            return (
              <div key={comment._id} className="flex gap-2 mt-16 items-center ">
                <img src={comment.author.photo} className="w-10 h-10 rounded-full" alt="user image" />
                <p className="text-lg font-medium text-primary/80 my-4">
                  <strong className="mr-2"> {comment.author.name} : </strong> {comment.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
