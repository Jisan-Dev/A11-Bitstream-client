import Newsletter from '@/components/Newsletter';
import Hero from './sections/Hero';
import RecentBlogs from './sections/RecentBlogs';
import Testimonial from './sections/Testimonial';
import BlogCard from '@/components/BlogCard';
import Featured from './sections/Featured';

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <RecentBlogs />
      <Testimonial />
      <Featured />
      <Newsletter />
    </>
  );
};

export default Home;
