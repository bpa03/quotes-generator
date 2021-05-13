import React, { useState, useEffect, useRef } from "react";

import { Quote } from "../Quote.jsx";
import { QuoteItem } from "../QuoteItem.jsx"
import { Author } from "../Author.jsx";
import { Spin } from "../SpinnerLoading.jsx";

export const Quotes = (props) => {
	const link = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
	const [quote, setQuote] = useState([]);
	const [loading, setLoading] = useState(true);
	const componentIsMounted = useRef(true);

	useEffect(() => {
		fetch(link)
			.then((res) => res.json())
			.then((data) => {
				if (componentIsMounted.current) {
					setQuote(data.data);
					setLoading(false);
				}
			});
	}, [link]);

	const handleClick = (e) => {
		if (loading || !componentIsMounted.current) {
			return;
		}

		setQuote([]);
		setLoading(true);

		fetch(link)
			.then((res) => res.json())
			.then((data) => {
				if (componentIsMounted.current) {
					setQuote(data.data);
					setLoading(false);
				}
			});
	};

	const elements = loading ? (
		<Spin />
	) : (
		quote.map((quote) => {
			const { _id, quoteAuthor, quoteText } = quote;
			return (
				<QuoteItem key={_id}>
					<Quote text={quoteText} />
					<Author author={quoteAuthor} />
				</QuoteItem>
			);
		})
	);

	return (
		<>
			<section className="quotes page__quotes">
				<div className="quotes__inner">
					<div className="quotes__container-button">
						<button
							className="quotes__random-buttom"
							onClick={handleClick}
						>
							random
							<span className="material-icons quotes__random-button-icon">replay</span>
						</button>
					</div>
					<div className="quotes__list-container">
						<ul className="quotes__list">
							{elements}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
