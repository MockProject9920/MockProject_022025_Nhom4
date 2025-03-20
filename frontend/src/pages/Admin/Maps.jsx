import React from "react";

// components/UI

import MapExample from "@components/UI/Maps/MapExample";

export default function Maps() {
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<MapExample />
					</div>
				</div>
			</div>
		</>
	);
}
