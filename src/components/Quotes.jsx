import React, { useState, useEffect, useRef } from "react";

import { Quote } from "./Quote.jsx";

export const Quotes = (props) => {
	const [link, setLink] = useState(
		"https://quote-garden.herokuapp.com/api/v3/quotes/random"
	);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const componentIsMounted = useRef(true);

	useEffect(() => {
		fetch(link)
			.then((res) => res.json())
			.then((data) => {
				if (componentIsMounted.current) {
					setData(data);
					setLoading(false);
					setLoading(null);
				}
			});
	}, [link]);

	const handleClick = (e) => {
		setData([]);
		setLoading(true);
		setError(null);

		if (loading) {
			return;
		}

		fetch(link)
			.then((res) => res.json())
			.then((data) => {
				if (componentIsMounted.current) {
					setData(data);
					setLoading(false);
					setLoading(null);
				}
			});
	};

	return (
		<>
			<h1>Quotes's Generator</h1>
			<button onClick={handleClick}> Random </button>
			{!loading ? (
				data.data.map((quote) => <Quote {...quote} key={quote._id} />)
			) : (
				<h2>Loading...</h2>
			)}
		</>
	);
};
