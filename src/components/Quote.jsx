import React from "react";

export const Quote = ({ quoteText, quoteAuthor }) => {
	return (
		<>
			<li>
				<h4>Author: {quoteAuthor}</h4>
				<p> {quoteText}</p>
			</li>
			<hr />
		</>
	);
};
