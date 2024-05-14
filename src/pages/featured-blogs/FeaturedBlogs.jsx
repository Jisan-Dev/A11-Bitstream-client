import BlogCard from '@/components/BlogCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';

const FeaturedBlogs = () => {
  const axiosSecure = useAxiosSecure();

  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ['featured'],
  });

  // useEffect(() => {
  //
  //   getData();
  // }, [axiosSecure]);
  const getData = async () => {
    try {
      const { data } = await axiosSecure(`/featured`);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('first', blogs);

  const columns = [
    {
      header: 'SL',
      accessorKey: 'blogSl',
    },
    {
      header: 'Title',
      accessorKey: 'blog_title',
    },
    {
      header: 'Author',
      accessorKey: 'author.name',
    },
    {
      header: 'Author Img',
      accessorKey: 'author.imageUrl',
    },
  ];

  const table = useReactTable(blogs, columns);

  if (!blogs.length) {
    return <p>Loading...</p>; // Placeholder for loading state
  }
  return (
    <section className="container mx-auto max-sm:mt-0 mt-10">
      {/* <header className="flex flex-col items-center justify-center space-y-4 mb-10 max-sm:mb-5">
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
      </main> */}
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {columns.map((column, i) => (
              <TableHead key={i}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.cells.map((cell) => (
                <td key={cell.id}>{flexRender(cell.value, cell)}</td>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default FeaturedBlogs;
