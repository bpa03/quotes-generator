import React, { useState, useEffect, useRef } from "react";

import { Quote } from "../Quote.jsx";
import { QuoteItem } from "../QuoteItem.jsx";
import { Author } from "../Author.jsx";
import { Spin } from "../SpinnerLoading.jsx";
import { getRandomQuote } from "../../lib/getRandomQuote";

export const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const componentIsMounted = useRef(true);

  const fetchData = async () => {
    const quote = await getRandomQuote();
    if (componentIsMounted.current) {
      setQuote(quote.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setQuote([]);
    setLoading(true);
    fetchData();
  }, [toggle]);

  const handleClick = (e) => {
    if (loading || !componentIsMounted.current) return;

    setToggle(!toggle);
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
              <span className="material-icons quotes__random-button-icon">
                replay
              </span>
            </button>
          </div>
          <div className="quotes__list-container">
            <ul className="quotes__list">{elements}</ul>
          </div>
        </div>
      </section>
    </>
  );
};
