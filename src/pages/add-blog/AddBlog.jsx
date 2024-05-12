import { Button } from '@/components/ui/button';

const AddBlog = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center min-h-[calc(100vh-360px)] my-10">
          <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg ">
            <h2 className="text-xl font-semibold text-gray-700 capitalize ">Post a Blog</h2>

            <form>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 font-medium" htmlFor="job_title">
                    Post Title
                  </label>
                  <input
                    id="job_title"
                    name="job_title"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-medium" htmlFor="imageUrl">
                    Image URL
                  </label>
                  <input
                    id="imageUrl"
                    type="imageUrl"
                    name="imageUrl"
                    // disabled
                    // defaultValue={user?.email}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-medium">
                    Short Description <small className="text-xs">(130 chars)</small>
                  </label>
                  <textarea
                    maxLength={130}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    name="shortDescription"
                    id="shortDescription"></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 font-medium" htmlFor="category">
                    Category
                  </label>
                  <select name="category" id="category" className="border p-2 rounded-md">
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  name="longDescription"
                  id="longDescription"></textarea>
              </div>
              <div className="flex justify-end mt-6">
                <Button size="lg" className="tracking-wide">
                  Post
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
