import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    PaginationState,
    OnChangeFn,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table/table";
import Pagination from "@/components/ui/pagination";
import Skeleton from "@/components/ui/skeleton/MpbSkeleton";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    pagination: any;
    setPagination: OnChangeFn<PaginationState>;
    pageCount: number;
    isLoading?: boolean;
    totalRecords: number;
    pageSizeOptions: number[];
}

export default function DataTable<TData, TValue>({
    columns,
    data,
    pagination,
    setPagination,
    pageCount,
    isLoading,
    totalRecords,
    pageSizeOptions,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
        },
        pageCount,
        onPaginationChange: setPagination,
        manualPagination: true,
        getCoreRowModel: getCoreRowModel(),
    });
    // console.log(table.getState().pagination)
    // const { rows } = table.getRowModel();

    return (
        <div className="rounded-sm border border-gray-300 ">
            <Table className="w-full text-left font-light">
                {isLoading ? (
                    [...Array(25).keys()].map((item) => (
                        <Skeleton key={item} className="mb-1 h-4 rounded-none " />
                    ))
                ) : (
                    <>
                        <TableHeader className="border-b bg-[#F2FAF5]">
                            {table?.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id} className="">
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                className="h-0  px-4 py-2 text-left text-sm font-medium text-gray-500"
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column.columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>

                        <TableBody>
                            {table?.getRowModel().rows?.length ? (
                                table?.getRowModel()?.rows?.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className="border-b"
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                key={cell.id}
                                                // className="whitespace-nowrap px-4 py-4 text-left text-xs font-medium"
                                                className="px-4 py-4 text-left text-xs font-medium"
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns?.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter className="border-b bg-[#F2FAF5]">
                            {table?.getHeaderGroups()?.map((headerGroup) => (
                                <TableRow key={headerGroup.id} className="">
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                className="h-0 whitespace-nowrap px-4 py-2 text-left text-sm font-medium text-gray-500"
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column.columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableFooter>
                    </>
                )}
            </Table>
            <div className="px-4 pb-4 pt-6">
                <Pagination
                    isLoading={isLoading}
                    totalRecords={totalRecords}
                    pageSizeOptions={pageSizeOptions}
                    pageSize={table.getState().pagination.pageSize}
                    setPageSize={table.setPageSize}
                    setPageIndex={table.setPageIndex}
                    getPageCount={table.getPageCount}
                />
            </div>
        </div>
    );
}

DataTable.defaultProps = {
    isLoading: false,
};
