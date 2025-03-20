import { createContext, useState, useMemo } from "react";

export const ClaimsContext = createContext();

// ✅ Danh sách Claim Types (Lưu trong Context để sử dụng ở nhiều nơi)
// const claimTypesList = ["Homeowner", "Earthquake", "Flood", "Auto", "Health"];

const mockClaims = [
	{
		id: "C001",
		policyNumber: "P123456",
		date: "2025-03-10",
		type: "Auto",
		amount: "5000",
		status: "Requested",
		damageDescription: "Mái nhà bị hư hại do bão.",
		uploadedEvidence: "roof_damage.jpg",
		adjusterComments: "Đang xem xét yêu cầu.",
		finalCompensation: "10000",
		supportDocument: "home_claim.pdf",
	},
	{
		id: "C002",
		policyNumber: "P654321",
		date: "2025-03-08",
		type: "Home",
		amount: "12000",
		status: "In Review",
		damageDescription: "Xe bị va chạm khi đỗ xe.",
		uploadedEvidence: "car_damage.jpg",
		adjusterComments: "Cần thêm hình ảnh từ góc khác.",
		finalCompensation: "4500",
		supportDocument: "insurance_report.docx",
	},
	{
		id: "C003",
		policyNumber: "P987654",
		date: "2025-03-06",
		type: "Health",
		amount: "2500",
		status: "Approved",
		damageDescription: "Xe bị va chạm khi đỗ xe.",
		uploadedEvidence: "car_damage.jpg",
		adjusterComments: "Cần thêm hình ảnh từ góc khác.",
		finalCompensation: "4500",
		supportDocument: "insurance_report.docx",
	},
	{
		id: "C004",
		policyNumber: "P777888",
		date: "2025-03-02",
		type: "Travel",
		amount: "800",
		status: "Rejected",
		damageDescription: "Xe bị va chạm khi đỗ xe.",
		uploadedEvidence: "car_damage.jpg",
		adjusterComments: "Cần thêm hình ảnh từ góc khác.",
		finalCompensation: "4500",
		supportDocument: "insurance_report.docx",
	},
];

export const ClaimsProvider = ({ children }) => {
	const [claims, setClaims] = useState(mockClaims);

	const statusColors = {
		Requested: "bg-yellow-500",
		"In Review": "bg-blue-500",
		Approved: "bg-green-500",
		Rejected: "bg-red-500",
	};

	// ✅ Tạo danh sách types động từ mockClaims (Lấy các giá trị unique)
	const claimTypes = useMemo(() => {
		const types = [...new Set(claims.map((claim) => claim.type))]; // Lấy các type duy nhất
		return types;
	}, [claims]);

	// Hàm cập nhật trạng thái Claim
	const updateClaimStatus = (id, newStatus) => {
		setClaims((prevClaims) =>
			prevClaims.map((claim) =>
				claim.id === id ? { ...claim, status: newStatus } : claim
			)
		);
	};

	return (
		<ClaimsContext.Provider
			value={{ claims, updateClaimStatus, claimTypes, statusColors }}
		>
			{children}
		</ClaimsContext.Provider>
	);
};
