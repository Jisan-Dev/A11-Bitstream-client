import BlogCard from '@/components/BlogCard';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const FeaturedBlogs = () => {
  const axiosSecure = useAxiosSecure();

  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ['featured'],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/featured`);
    return data;
  };
  return (
    <section className="container mx-auto max-sm:mt-0 mt-10">
      <header className="flex flex-col items-center justify-center space-y-4 mb-10 max-sm:mb-5">
        <h2 className="text-6xl max-sm:text-5xl font-semibold text-primary">Featured Blogs </h2>
        <p className="text-xl max-sm:text-base font-medium text-primary/70 max-w-[600px] text-center">
          Immerse Yourself in Our Freshest Stream of Cutting-Edge Tech Insights and Narratives
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:px-4">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </main>
    </section>
  );
};

export default FeaturedBlogs;
