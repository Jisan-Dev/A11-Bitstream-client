import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="flex items-center min-h-[calc(100vh-68px)] justify-center">
      <div className="mx-auto max-w-[63rem]">
        <div className="text-center">
          <p className="text-base md:text-xl font-semibold leading-8 text-lime-600/75">Blogging at the Forefront of Innovation</p>
          <h1 className="mt-3 text-[3rem] sm:text-[4rem] xl:text-[5rem] font-semibold leading-[3rem] md:leading-[4.5rem] tracking-tight text-black">
            Bitsream: The Digital Frontier for Tech Thought Leaders
          </h1>
          <p className="mt-3 text-base md:text-xl font-medium leading-normal text-slate-400">
            Unleash your passion, share your expertise, and immerse yourself in a vibrant community of tech enthusiasts from around the world.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Button size="lg" className="text-base rounded-md px-5 py-3 font-medium transition-colors">
            Get started for free
          </Button>
          <Button size="lg" variant="outline" className="text-base rounded-md px-5 py-3 font-medium transition-colors">
            Explore Blogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
