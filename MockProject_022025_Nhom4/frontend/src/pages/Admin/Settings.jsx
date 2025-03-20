import React from "react";

// components/UI

import CardSettings from "@/components/UI/Card/CardSettings";
import CardProfile from "@/components/UI/Card/CardProfile";

export default function Settings() {
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-8/12 px-4">
					<CardSettings />
				</div>
				<div className="w-full lg:w-4/12 px-4">
					<CardProfile />
				</div>
			</div>
		</>
	);
}
