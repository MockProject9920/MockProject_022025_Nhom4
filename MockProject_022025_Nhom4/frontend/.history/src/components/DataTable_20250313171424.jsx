import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContracts } from "../redux/slices/contractSlice";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const DataTable = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.contracts);

  useEffect(() => {
    dispatch(fetchContracts());
  }, [dispatch]);

  const columns = [
    { accessorKey: "id", header: "Contract ID" },
    { accessorKey: "contractName", header: "Contract Name" },
    { accessorKey: "policyStartDate", header: "Policy Start Date" },
    { accessorKey: "policyEndDate", header: "Policy End Date" },
    { accessorKey: "premiumCharge", header: "Premium Charge" },
    { accessorKey: "paymentAmount", header: "Payment Amount", size: 150 },
    { accessorKey: "balance", header: "Balance" },
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
          <p className={`p-2 text-white text-sm rounded-2xl ${statusColors[status]}`}>
            {status}
          </p>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex: 0, pageSize: 5 } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <table className="w-full border-collapse border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 border">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
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
    </div>
  );
};

export default DataTable;
