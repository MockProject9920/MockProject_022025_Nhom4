// src/components/ClaimActions.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClaimsContext } from "../../contexts/ClaimContext";
import UploadEvidenceModal from "../../components/UI/Modal/UploadEvidenceModal";
import CancelConfirmModal from "../../components/UI/Modal/CancelConfirmModal";
import ModalEdit from "../../components/UI/Modal/EditClaimModal";

const ClaimActions = () => {
	const navigate = useNavigate();
	const { selectedClaim, updateClaimStatus } = useContext(ClaimsContext);
	const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
	const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	if (!selectedClaim) return null;

	// Handler cho Upload Evidence
	const handleUploadSave = (file) => {
		updateClaimStatus(selectedClaim.id, { uploadedEvidence: file });
		setIsUploadModalOpen(false);
		toast.success("Evidence uploaded successfully!");
	};

	// Handler cho Cancel Claim
	const handleCancelConfirm = () => {
		updateClaimStatus(selectedClaim.id, "Rejected");
		setIsCancelModalOpen(false);
		toast.success("Claim has been cancelled.");
		navigate(-1);
	};

	// Handler cho Edit Claim
	const handleEditSave = (editedData) => {
		updateClaimStatus(selectedClaim.id, editedData);
		setIsEditModalOpen(false);
		toast.success("Claim updated successfully!");
	};

	return (
		<div className="mt-4 space-x-2">
			{selectedClaim.status === "Requested" && (
				<>
					<button
						onClick={() => setIsEditModalOpen(true)}
						className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
					>
						Edit Claim
					</button>
					<button
						onClick={() => setIsCancelModalOpen(true)}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
					>
						Cancel Claim
					</button>
				</>
			)}
			{selectedClaim.status === "In Review" && (
				<>
					<button
						onClick={() => setIsUploadModalOpen(true)}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						Upload Evidence
					</button>
					<button
						onClick={() => setIsCancelModalOpen(true)}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
					>
						Cancel Claim
					</button>
				</>
			)}
			{selectedClaim.status === "Rejected" && (
				<button
					onClick={() => setIsCancelModalOpen(true)}
					className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
				>
					Cancel Claim
				</button>
			)}
			{selectedClaim.status === "Approved" && null}

			{/* Render modal Upload Evidence */}
			<UploadEvidenceModal
				selectedClaim={selectedClaim}
				isOpen={isUploadModalOpen}
				onClose={() => setIsUploadModalOpen(false)}
				onSave={handleUploadSave}
			/>

			{/* Render modal Cancel Confirm */}
			<CancelConfirmModal
				selectedClaim={selectedClaim}
				isOpen={isCancelModalOpen}
				onClose={() => setIsCancelModalOpen(false)}
				onConfirm={handleCancelConfirm}
			/>

			{/* Render modal Edit Claim */}
			<ModalEdit
				selectedClaim={selectedClaim}
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				onSave={handleEditSave}
			/>
		</div>
	);
};

export default ClaimActions;
