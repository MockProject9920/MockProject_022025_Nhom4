/* eslint-disable react/prop-types */
import { useEffect } from "react";

const PageMeta = ({ title, description }) => {
	useEffect(() => {
		document.title = title;

		let metaDescription = document.querySelector("meta[name='description']");
		if (!metaDescription) {
			metaDescription = document.createElement("meta");
			metaDescription.name = "description";
			document.head.appendChild(metaDescription);
		}
		metaDescription.content = description;

		return () => {
			document.title = "Default Title"; // Reset khi unmount (tuỳ chọn)
			metaDescription.content = "Default description"; // Reset meta description
		};
	}, [title, description]);

	return null; // Không cần render gì cả
};

export const AppWrapper = ({ children }) => {
	return <>{children}</>;
};

export default PageMeta;
