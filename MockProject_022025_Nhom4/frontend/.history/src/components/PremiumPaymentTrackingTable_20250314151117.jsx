import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setContracts } from "../redux/contractsSlice";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const PremiumPaymentTrackingTable = ({ data }) => {
  const dispatch = useDispatch();
  const contracts = useSelector((state) => state.contracts.data);

  useEffect(() => {
    axios
      .get("/api/invoice/list")
      .then((response) => {
        dispatch(setContracts(response.data));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  const columns = [
    {
      accessorKey: "id",
      header: "Contract ID",
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
          <p
            className={`p-2 text-white text-sm rounded-2xl ${statusColors[status]}`}
          >
            {status}
          </p>
        );
      },
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const table = useReactTable({
    data: contracts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting, pagination, columnSizing },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnSizingChange: setColumnSizing,
  });

  const totalEntries = contracts.length;
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
                      <i className="ri-filter-2-line ml-2 "></i>
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

      <div className="mt-4 flex justify-between">
        <span className="text-gray-600">
          Showing {startIndex} to {endIndex} of {totalEntries} entries
        </span>
        <span>
          Page {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </span>
        <div className="space-x-3 ">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 bg-gray-300 h-10"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 bg-gray-300 h-10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

PremiumPaymentTrackingTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PremiumPaymentTrackingTable;