import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex items-center min-h-[calc(100vh-68px)] justify-center">
      <div className="mx-auto max-w-[63rem]">
        <div className="text-center ">
          <div className="overflow-hidden">
            <motion.p
              variants={{ hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base md:text-xl font-semibold leading-8 text-lime-600/75">
              Blogging at the Forefront of Innovation
            </motion.p>
            {['Bitsream: The Digital', 'Frontier for Tech Thought', 'Leaders'].map((item, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-3 text-[3rem] sm:text-[4rem] xl:text-[5rem] font-semibold leading-[3rem] md:leading-[4.5rem] tracking-tight text-black">
                  {item}
                </motion.h1>
              </div>
            ))}
          </div>
          <p className="mt-3 text-base md:text-xl font-medium leading-normal text-slate-400">
            Unleash your passion, share your expertise, and immerse yourself in a vibrant community of tech enthusiasts from around the world.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link to={'/sign-up'}>
            <Button size="lg" className="text-base rounded-md px-5 py-3 font-medium transition-colors">
              Get started for free
            </Button>
          </Link>
          <Link to={'all-blogs'}>
            <Button size="lg" variant="outline" className="text-base rounded-md px-5 py-3 font-medium transition-colors">
              Explore Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
