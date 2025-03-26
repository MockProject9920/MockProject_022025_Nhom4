import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const PremiumPaymentTrackingTable = ({ data }) => {
  const columns = [
    {
      accessorKey: "id",
      header: "Contract ID",
      cell: ({ getValue }) => {
        const contractId = getValue();
        return (
          <Link
            to={`/admin/payment-tracking/${contractId}`}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {contractId}
          </Link>
        );
      },
    },
    {
      accessorKey: "contractName",
      header: "Contract Name",
    },
    {
      accessorKey: "policyStartDate",
      header: "Policy Start Date",
    },
    {
      accessorKey: "policyEndDate",
      header: "Policy End Date",
    },
    {
      accessorKey: "premiumCharge",
      header: "Premium Charge",
    },
    {
      accessorKey: "paymentAmount",
      header: "Payment Amount",
      size: 150,
    },
    {
      accessorKey: "balance",
      header: "Balance",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue();
        const statusColors = {
          PARTIALLY_PAID: "bg-[#FFC130]",
          PAID: "bg-[#27CA40]",
          OVERDUE: "bg-[#E60B0B]",
        };
        return (
          <p className={`p-2 text-white text-sm rounded-2xl ${statusColors[status]}`}>{status}</p>
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

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <table className="w-full border-collapse border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 border cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
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

      <div className="mt-4 flex justify-between">
        <span className="text-gray-600">
          Showing {pagination.pageIndex * pagination.pageSize + 1} to {Math.min((pagination.pageIndex + 1) * pagination.pageSize, data.length)} of {data.length} entries
        </span>
        <div className="space-x-3">
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md">Previous</button>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

PremiumPaymentTrackingTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PremiumPaymentTrackingTable;