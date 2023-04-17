import React from "react";

interface Props {
	title: string;
	subtitle?: string;
}

const PageHeader = ({ title, subtitle }: Props) => {
	return (
		<div className="page-header">
			<h2 className="title">{title}</h2>
			{subtitle && <h2 className="sub-title">{subtitle}</h2>}
		</div>
	);
};

export default PageHeader;
