import DataTable from "../../components/DataTable";
import data from "../../data/data";

function TransactionManagement() {
  return (
    <div className="mt-15 mr-8">
      <div className="flex space-x-0 justify-between">
        <div className="flex space-x-2.5 ">
          <i className="ri-bank-card-2-fill text-2xl"></i>
          <i className="ri-arrow-right-s-line text-2xl"></i>
          <p className="text-2xl">Premium Payment Tracking</p>
        </div>
        <div className="flex space-x-2  w-42 h-11 items-center justify-center bg-[#60B9F9] text-white rounded-lg">
          <i className="ri-add-circle-line text-xl"></i>
          <p className="text-lg">Export CSV File</p>
        </div>
      </div>
      <div>
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default TransactionManagement;
