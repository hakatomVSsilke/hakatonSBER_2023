import "./loader.style.css";
import React from "react";

interface LoaderComponentProps
{
	id?: string;

	className?: string;
}

const LoaderComponent: React.FunctionComponent<LoaderComponentProps> = ({ id = '', className = ''}) => {
	return (
		<div className="pageList">
			<svg
				id={id}
				className={"loader " + className}
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="191px"
				height="191px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle
					cx="50"
					cy="50"
					fill="none"
					stroke="#08a652"
					strokeWidth="7"
					r="35"
					strokeDasharray="164.93361431346415 56.97787143782138"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						repeatCount="indefinite"
						dur="0.9615384615384615s"
						values="0 50 50;360 50 50"
						keyTimes="0;1"
					></animateTransform>
				</circle>
			</svg>
		</div>
	);
};

export default LoaderComponent;
