import { Button } from '@/components/ui/button';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: blog = {} } = useQuery({
    queryFn: () => getData(),
    queryKey: ['blog', id],
  });
  console.log('first', blog, id);

  const getData = async () => {
    const { data } = await axiosSecure(`/blogs/${id}?email=${user?.email}`);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    data.wordCount = data.longDescription.split(' ').length;
    // const { blog_title, imageUrl, author, shortDescription, longDescription, category } = data;
    // const toSaveData = {
    //   blog_title,
    //   imageUrl,
    //   author,
    //   shortDescription,
    //   longDescription,
    //   category,
    // };
    const { data: res } = await axiosSecure.put(`/update-blog/${id}`, data);
    if (res.modifiedCount > 0) {
      toast.success('Blog updated successfully', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '14px 20px',
        },
      });
      navigate(`/blog-details/${id}`);
    } else {
      toast.error('Something went wrong', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '14px 20px',
        },
      });
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[calc(100vh-360px)] my-10 px-6">
          <section className="p-2 md:p-6 w-full mx-auto bg-white rounded-md shadow-lg ">
            <h2 className="text-4xl mb-4 font-semibold text-gray-700 capitalize ">Post a Blog</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="job_title">
                      Post Title
                    </label>
                    <input
                      id="blog_title"
                      name="blog_title"
                      type="text"
                      required
                      defaultValue={blog?.blog_title}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-medium" htmlFor="imageUrl">
                      Image URL
                    </label>
                    <input
                      id="imageUrl"
                      type="url"
                      name="imageUrl"
                      required
                      // disabled
                      defaultValue={blog?.imageUrl}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium">
                      Short Description <small className="text-xs">(130 chars)</small>
                    </label>
                    <textarea
                      maxLength={130}
                      required
                      defaultValue={blog?.shortDescription}
                      className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      name="shortDescription"
                      id="shortDescription"></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium" htmlFor="category">
                      Category
                    </label>
                    <select required name="category" defaultValue={blog?.category} id="category" className="border p-2 rounded-md">
                      <option value="Entrepreneurship">Entrepreneurship</option>
                      <option value="Web Development">Web Development</option>
                      <option value="AI/ML">AI/ML</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-gray-700 font-medium" htmlFor="description">
                    Long Description
                  </label>
                  <textarea
                    className="block h-[200px] w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    name="longDescription"
                    defaultValue={blog?.longDescription}
                    id="longDescription"
                    required></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button size="lg" className="tracking-wide">
                  Update
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
