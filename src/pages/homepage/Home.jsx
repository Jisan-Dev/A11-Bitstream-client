import Newsletter from '@/components/Newsletter';
import Hero from './sections/Hero';
import RecentBlogs from './sections/RecentBlogs';
import BlogCard from '@/components/BlogCard';

const Home = () => {
  return (
    <>
      <Hero />
      <RecentBlogs />
      <Newsletter />
    </>
  );
};

export default Home;
