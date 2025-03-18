/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DocumentUploader = () => {
	const onDrop = useCallback((acceptedFiles) => {
		/* File upload processing (call PHP backend API) */
		console.log(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div
			{...getRootProps()}
			className="border-2 border-dashed border-gray-300 p-6 rounded-md text-center cursor-pointer hover:border-blue-500 transition-colors"
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop files here...</p>
			) : (
				<p>Drag and drop files here or click to select files</p>
			)}
		</div>
	);
};

export default DocumentUploader;
