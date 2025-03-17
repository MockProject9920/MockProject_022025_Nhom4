import { useState } from "react";
import PropTypes from "prop-types";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

/**
 * TransactionManagementTable Component
 * This component displays a table for managing financial transactions.
 * It supports sorting, pagination, and dynamic column rendering.
 */
const TransactionManagementTable = ({ data }) => {
  // Define table columns
  const columns = [
    {
      accessorKey: "transactionId",
      header: "Transaction ID",
    },
    {
      accessorKey: "contractName",
      header: "Contract Name",
    },
    {
      accessorKey: "paymentAmount",
      header: "Payment Amount",
      size: 150,
    },
    {
      accessorKey: "paymentMethod",
      header: "Payment Method",
    },
    {
      accessorKey: "paymentDate",
      header: "Payment Date",
    },
    {
      accessorKey: "status",
      header: "Status",
      // Custom cell rendering for status column with different background colors
      cell: ({ getValue }) => {
        const status = getValue();
        const statusColors = {
          SUCCESS: "bg-[#27CA40]",
          FAIL: "bg-[#E60B0B]",
          PENDING: "bg-[#FFC130]",
        };

        return (
          <p
            className={`p-2 text-white text-sm rounded-2xl ${statusColors[status]}`}
          >
            {status}
          </p>
        );
      },
    },
  ];

  // State variables for sorting, pagination, and column sizing
  const [sorting, setSorting] = useState([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  // Initialize the table using `useReactTable`
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

  // Calculate total entries and displayed range for pagination
  const totalEntries = data.length;
  const startIndex = pagination.pageIndex * pagination.pageSize + 1;
  const endIndex = Math.min(startIndex + pagination.pageSize - 1, totalEntries);

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      {/* Table */}
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
                    {/* Render column header with sorting icons */}
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
                  {/* Render cell content */}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="mt-4 flex justify-between">
        {/* Display range of current entries */}
        <span className="text-gray-600">
          Showing {startIndex} to {endIndex} of {totalEntries} entries
        </span>

        {/* Display current page number */}
        <span>
          Page {table.getState().pagination.pageIndex + 1} /{" "}
          {table.getPageCount()}
        </span>

        {/* Pagination navigation buttons */}
        <div className="!space-x-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 !bg-[#D9E2FF] !hover:bg-[#a9b1ca] h-10 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 !bg-[#D9E2FF] !hover:bg-[#a9b1ca] h-10 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop type validation
TransactionManagementTable.propTypes = {
  data: PropTypes.array.isRequired,
};

// Export component
export default TransactionManagementTable;
