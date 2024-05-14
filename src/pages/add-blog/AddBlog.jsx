import { Button } from '@/components/ui/button';
import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const blogData = Object.fromEntries(formData.entries());
    blogData.postedTime = new Date();
    blogData.wordCount = blogData.longDescription.split(' ').length;
    blogData.author = {
      name: user?.displayName,
      email: user?.email,
    };
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-blog`, blogData);
      if (data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Blog posted successfully',
        });
        navigate('/all-blogs');
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Sorry something went wrong!',
      });
    }
    form.reset();
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
                      // defaultValue={user?.email}
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
                      className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      name="shortDescription"
                      id="shortDescription"></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium" htmlFor="category">
                      Category
                    </label>
                    <select required name="category" id="category" className="border p-2 rounded-md">
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
                    id="longDescription"
                    required></textarea>
                </div>
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
