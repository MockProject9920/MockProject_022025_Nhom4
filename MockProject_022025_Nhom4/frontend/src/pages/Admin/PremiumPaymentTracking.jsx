import DataTable from "../../components/PremiumPaymentTrackingTable";
import data from "../../data/premiumPaymentTracking";

function PremiumPaymentTracking() {
  return (
    <div className="mt-15 mr-8">
      <div className="flex justify-between">
        <div className="flex space-x-2.5">
          <i className="ri-bank-card-2-fill text-2xl"></i>
          <i className="ri-arrow-right-s-line text-2xl"></i>
          <p className="text-2xl">Premium Payment Tracking</p>
        </div>
        {/* <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <i className="ri-download-line text-xl"></i>
          <p className="text-lg">Export CSV File</p>
        </button> */}
      </div>

      <div className="mt-6">
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default PremiumPaymentTracking;
