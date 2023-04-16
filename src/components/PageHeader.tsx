import React from "react";

interface Props {
	title: string;
	subtitle?: string;
}

const PageHeader = ({ title, subtitle }: Props) => {
	return (
		<div className="page-header">
			<h1>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</div>
	);
};

export default PageHeader;
