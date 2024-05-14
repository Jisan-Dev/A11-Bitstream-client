import BlogCard from '@/components/BlogCard';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const AllBlogs = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const [filter, setFilter] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/all-blogs?filter=${filter}&search=${search}`);
      setBlogs(data);
    };
    getData();
  }, [filter, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    // setSearch(e.target.search.value);
    setSearch(searchText);
  };

  return (
    <section className="container mx-auto mt-10">
      <header className="flex flex-col items-center justify-center space-y-4 mb-10">
        <h2 className="text-6xl max-sm:text-4xl font-semibold text-primary">All Blogs </h2>
        <p className="text-xl max-sm:text-base font-medium text-primary/70 max-w-[600px] text-center">
          Immerse Yourself in Our Freshest Stream of Cutting-Edge Tech Insights and Narratives
        </p>
      </header>
      <main>
        <div className="flex flex-wrap md:flex-row justify-center items-center max-sm:gap-3 gap-5 mb-4">
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-3 rounded-lg w-56">
              <option value="">Filter By Category</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Web Development">Web Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-3 rounded-md mr-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:px-4">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default AllBlogs;
