import BlogCard from '@/components/BlogCard';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { AuthContext } from '@/providers/AuthProvider';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';

const RecentBlogs = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ['blogs'],
  });
  console.log(blogs);

  const getData = async () => {
    const { data } = await axiosSecure(`/blogs`);
    return data;
  };
  return (
    <section className="container mx-auto mt-10">
      <header className="flex flex-col items-center justify-center space-y-4 mb-10">
        <h2 className="text-6xl font-semibold text-primary">Recent Blogs: {blogs.length} </h2>
        <p className="text-xl font-medium text-primary/70 max-w-[600px] text-center">Immerse Yourself in Our Freshest Stream of Cutting-Edge Tech Insights and Narratives</p>
      </header>
      <main>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </main>
    </section>
  );
};

export default RecentBlogs;