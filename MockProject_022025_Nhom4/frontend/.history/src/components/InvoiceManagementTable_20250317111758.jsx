import { useState } from "react";
import PropTypes from "prop-types";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const InvoiceManagementTable = ({ data }) => {
  const columns = [
    {
      accessorKey: "invoiceNo",
      header: "Invoice No.",
    },
    {
      accessorKey: "contractID",
      header: "Contract ID",
    },
    {
      accessorKey: "issuedDate",
      header: "Issued Date",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "userID",
      header: "User ID",
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue();
        const statusColors = {
          Active: "bg-[#27CA40]",
          Inactive: "bg-[#4EAEEA]",
        };

        return (
          <div className="flex space-x-0 justify-center">
            <p
              className={`p-2 w-22 text-white  text-sm rounded-2xl ${statusColors[status]}`}
            >
              {status}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: () => {
        return (
          <div className="flex space-x-1.5 justify-center">
            <i className="ri-edit-box-fill bg-[#8FC5FB] p-1 rounded-lg"></i>
            <i className="ri-delete-bin-7-fill bg-[#FC6741] p-1 rounded-lg"></i>
            <i className="ri-mail-line bg-[#BAED8E] p-1 rounded-lg"></i>
          </div>
        );
      },
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting, pagination, columnSizing },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnSizingChange: setColumnSizing,
  });

  const totalEntries = data.length;
  const startIndex = pagination.pageIndex * pagination.pageSize + 1;
  const endIndex = Math.min(startIndex + pagination.pageSize - 1, totalEntries);

  return (
    <div className="p-4">
      <table className="w-full border-collapse border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => {
                const isSorted = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    className="p-2 border cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()} // Xử lý khi click vào tiêu đề
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/* Hiển thị icon dựa vào trạng thái sắp xếp */}
                    {isSorted === "asc" ? (
                      <i className="ri-sort-asc ml-2"></i>
                    ) : isSorted === "desc" ? (
                      <i className="ri-sort-desc ml-2"></i>
                    ) : (
                      <i className="ri-filter-2-line ml-2 "></i>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="text-center ">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100 ">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-1 border ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <span className="text-gray-600">
          Showing {startIndex} to {endIndex} of {totalEntries} entries
        </span>
        <span>
          Page {table.getState().pagination.pageIndex + 1} /{" "}
          {table.getPageCount()}
        </span>
        <div className="flex !space-x-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 !bg-[#D9E2FF] !hover:!bg-[#a9b1ca] h-10  rounded-md "
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 !bg-[#D9E2FF] !hove:bg-[#a9b1ca] h-10  rounded-md "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

InvoiceManagementTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InvoiceManagementTable;
