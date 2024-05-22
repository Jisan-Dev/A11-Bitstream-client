import { TbArrowsSort } from 'react-icons/tb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from '@tanstack/react-table';

const columns = [
  {
    id: 'S.No',
    header: 'S.No',
    cell: (info) => <p>{info.row.index + 1}</p>,
  },
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
      <div className="px-6 md:px-16">
        <Table className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="whitespace-nowrap" key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <TableHead className={i === 1 && 'pr-40'} key={header.id}>
                  {header.column.columnDef.header}
                  {header.column.getCanSort() && <TbArrowsSort className="inline-flex ml-2 cursor-pointer" onClick={header.column.getToggleSortingHandler()} />}
                </TableHead>
              ))}
            </TableRow>
          ))}
          {/* <TableBody> */}
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, i) => (
                <TableCell className={i === 3 && 'pl-10'} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
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
