import React from "react";

export const Author = ({ author }) => {
	return (
		<>
			<a className="quotes__author-link" href={`authors/${author}`}>
				<h4 className="quotes__author"> {author} </h4>
				<span className="material-icons quotes__author-arrow-icon">trending_flat</span>
			</a>
		</>
	);
};
