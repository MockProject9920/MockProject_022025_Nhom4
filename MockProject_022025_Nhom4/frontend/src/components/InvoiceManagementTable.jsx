// Import necessary dependencies
import { useState } from "react";
import PropTypes from "prop-types";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

// InvoiceManagementTable component displays a paginated and sortable table for invoices.
const InvoiceManagementTable = ({ data }) => {
  // Define table columns
  const columns = [
    { accessorKey: "invoiceNo", header: "Invoice No." },
    { accessorKey: "contractID", header: "Contract ID" },
    { accessorKey: "issuedDate", header: "Issued Date" },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue }) => <span>{getValue()}$</span>,
    },
    { accessorKey: "userID", header: "User ID" },
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
          <div className="flex justify-center">
            <p
              className={`p-2 w-22 text-white text-sm rounded-2xl ${statusColors[status]}`}
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
      cell: () => (
        <div className="flex space-x-1.5 justify-center">

        </div>
      ),
    },
  ];

  // State variables for sorting, pagination, and column sizing
  const [sorting, setSorting] = useState([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  // Initialize table with required models and states
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

  // Calculate pagination details
  const totalEntries = data.length;
  const startIndex = pagination.pageIndex * pagination.pageSize + 1;
  const endIndex = Math.min(startIndex + pagination.pageSize - 1, totalEntries);

  return (
    <div className="p-4">
      {/* Invoice table */}
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
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {isSorted === "asc" ? (
                      <i className="ri-sort-asc ml-2"></i>
                    ) : isSorted === "desc" ? (
                      <i className="ri-sort-desc ml-2"></i>
                    ) : (
                      <i className="ri-filter-2-line ml-2"></i>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="text-center">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-1 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="mt-4 flex justify-between">
        <span className="text-gray-600">
          Showing {startIndex} to {endIndex} of {totalEntries} entries
        </span>
        <span>
          Page {table.getState().pagination.pageIndex + 1} /{" "}
          {table.getPageCount()}
        </span>
        <div className="flex space-x-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 bg-[#D9E2FF] h-10 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 bg-[#D9E2FF] h-10 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
InvoiceManagementTable.propTypes = {
  data: PropTypes.array.isRequired,
};

// Export InvoiceManagementTable component
export default InvoiceManagementTable;
