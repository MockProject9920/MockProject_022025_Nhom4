/* eslint-disable react/prop-types */
import clsx from "clsx";

function Input({
	file,
	password = false,
	email= false,
	checkbox= false,
	radio= false,
	search= false,
	submit= false,
	date= false,
	select= false,
	big= false,
	soSmall= false,
	large= false,
	small= false,
	textLeft = false,
	textRight = false,
	children,
	className,
	onChange,
	...passProps
}) {
	let type = "text";

	const props = {
		onChange,
		...passProps
	}

	if (password) type = "password";
    if (email) type = "email";
    if (checkbox) type = "checkbox";
    if (radio) type = "radio";
    if (search) type = "search";
    if (submit) type = "submit";
	if (date) type = "date"
	if (file) type = "file"
	if (select) {
		return (
			<div className="flex items-center ">
			{textLeft && <span className="!mr-10 text-center text-gray">{textLeft}</span>}
				<select
	        		{...props}
	        			className={clsx(
	          			className,
	          			"!rounded-sm !bg-gray-300 border-0 !focus:outline-none",
	          			{
	            			"w-150 px-4 py-2": big,
	            			"w-70 px-4 py-2": large,
	            			"w-40 px-4 py-2": small,
	            			"w-23 px-4 py-2": soSmall,
	          			}
	        			)}
	      		>
	        			{children || <option value="">Chọn một tùy chọn</option>}
	      		</select>
			{textRight && <span className="!ml-10 text-center text-gray">{textRight}</span>}
			</div>
    	);
		
	}



	return ( 
		<div className="flex items-center">
			{textLeft && <span className="mr-10 text-center text-gray">{textLeft}</span>}
			<input className ={clsx(
					className,
					"!rounded-sm !bg-gray-300 border-0 !focus:outline-none",
					{
						"w-150 px-4 py-2 border-0 rounded-sm" : big,
						"w-70 px-4 py-2 border-0 !rounded-sm" : large,
						"w-40 px-4 py-2 border-0 !rounded-sm" : small,
						"w-23 px-4 py-2 border-0 !rounded-sm" : soSmall,
						
					}
			)} 
			type={type} 
			{...props} 
			/>
			{textRight && <span className="mr-1 text-center text-gray">{textRight}</span>}
		</div>
	 );
}

export default Input;
