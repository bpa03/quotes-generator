import React, { useState, useRef, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { getQuotesAuthor } from "../../lib/getQuotesAuthor";
import { Quote } from "../Quote.jsx";
import { QuoteItem } from "../QuoteItem.jsx";
import { Spin } from "../SpinnerLoading.jsx";

export const Authors = () => {
  const path = useRouteMatch();
  const { params } = path;
  const { authorName } = params;

  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const componentIsMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const quotes = await getQuotesAuthor(authorName);
      if (componentIsMounted.current) {
        setQuotes(quotes);
        setLoading(false);
      }
    };

    setLoading(true);
    setQuotes([]);
    fetchData();
  }, [authorName]);

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  const elements = loading ? (
    <Spin />
  ) : (
    quotes.map((quote) => {
      const { _id, quoteText } = quote;
      return (
        <QuoteItem key={_id}>
          <Quote text={quoteText} />
        </QuoteItem>
      );
    })
  );

  return (
    <>
      <section className="authors page__authors">
        <div className="authors__inner">
          <div className="authors__link-container">
            <Link to="/" className="authors__link">
              random
              <span className="material-icons authors__random-button-icon">
                replay
              </span>
            </Link>
          </div>
          <div className="authors__list-container">
            <h2 className="authors__author-name"> {authorName} </h2>
            <ul className="authors__list">{elements}</ul>
          </div>
        </div>
      </section>
    </>
  );
};
