/* eslint-disable react/prop-types */
import React from "react";

const LoadingErrorMessage = ({
	loading,
	error,
	data,
	noDataMessage = "No data to display",
}) => {
	if (loading)
		return <div className="text-center text-gray-600">Loading...</div>;
	if (error)
		return <div className="text-center text-red-600">Error: {error}</div>;
	if (!Array.isArray(data) || data.length === 0)
		return <div className="text-center text-gray-600">{noDataMessage}</div>;

	return null;
};

export default LoadingErrorMessage;
