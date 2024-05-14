const Testimonial = () => {
  return (
    <section className="my-10">
      <section className="bg-base-100 text-base-content">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-5xl font-bold text-primary">What everyone is saying about the platform</h2>
              <p className="text-lg font-medium text-neutral-500">
                Resounding endorsements that capture the essence of our platforms success and user satisfaction. Hear from delighted users across the globe.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-lg bg-primary text-white">
                    <p>
                      Bitsream is a true oasis for tech enthusiasts like myself. Its vibrant community fosters insightful discussions and collaboration, enabling me to continually
                      expand my knowledge. The platforms user-friendly interface and wealth of resources have been instrumental in honing my skills and staying ahead of emerging
                      trends.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-stone-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-lg bg-primary text-white">
                    <p>
                      {/* Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius
                    consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu. */}
                      Bitsstream unlocked a new realm of innovation for my ideas. Collaborate with brilliant minds and transform my tech passion into reality.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-stone-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-lg bg-primary text-white">
                    <p>
                      Bitsream is a true oasis for tech enthusiasts like myself. Its vibrant community fosters insightful discussions and collaboration, enabling me to continually
                      expand my knowledge. The platforms user-friendly interface and wealth of resources have been instrumental in honing my skills and staying ahead of emerging
                      trends. Bitsream is where innovation thrives
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-stone-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-lg bg-primary text-white">
                    <p>
                      Bitsream is a true oasis for tech enthusiasts like myself. Its vibrant community fosters insightful discussions and collaboration, enabling me to continually
                      expand my knowledge. The platforms user-friendly interface and wealth of resources have been instrumental in honing my skills and staying ahead of emerging
                      trends. Bitsream is where innovation thrives
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-stone-400">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
