import { TbArrowsSort } from 'react-icons/tb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from '@tanstack/react-table';

const columns = [
  // {
  //   id: 'S.No',
  //   header: 'S.No',
  //   cell: (info) => <p>{info.row.index + 1}</p>,
  // },
  {
    header: 'Title',
    accessorKey: 'blog_title',
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    header: 'Author',
    accessorKey: 'author',
    cell: (props) => <p>{props.getValue()?.name}</p>,
  },
  {
    header: 'Author Img',
    accessorKey: 'author',
    cell: (props) => (
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img src={props.getValue()?.imageUrl} alt="" />
      </div>
    ),
  },
];

const FeaturedBlogs = () => {
  const axiosSecure = useAxiosSecure();

  const { data = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ['featured'],
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure(`/featured`);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('first', data);

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel() });
  console.log(table.getHeaderGroups());

  if (!data.length) {
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

      {/* <Table className="w-full">
        <TableHeader>
          <TableRow>
            {columns.map((column, i) => (
              <TableHead key={i}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table> */}

      <div className="px-16">
        <Table>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.column.columnDef.header}
                  {header.column.getCanSort() && <TbArrowsSort className="inline-flex ml-2 cursor-pointer" onClick={header.column.getToggleSortingHandler()} />}
                </TableHead>
              ))}
            </TableRow>
          ))}
          {/* <TableBody> */}
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
          {/* </TableBody> */}
        </Table>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
