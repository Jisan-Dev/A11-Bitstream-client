import BlogCard from '@/components/BlogCard';
import CardSkeleton from '@/components/CardSkeleton';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Featured = () => {
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ['featured'],
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure(`/featured`);
      setLoading(false);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <section className="mb-20 container mx-auto">
      <header className="flex flex-col items-center justify-center space-y-4 mb-10 max-sm:mb-5">
        <h2 className="text-6xl max-sm:text-5xl font-semibold text-primary">Featured Blogs </h2>
        <p className="text-xl max-sm:px-3 max-sm:text-base font-medium text-primary/70 max-w-[600px] text-center">
          Immerse Yourself in Our Freshest Stream of Cutting-Edge Tech Insights and Narratives
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:px-4">
        {loading && <CardSkeleton cards={6} />}
        {blogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </main>
    </section>
  );
};

export default Featured;
