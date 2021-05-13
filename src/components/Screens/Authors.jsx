import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { Quote } from '../Quote.jsx';

export const Authors = () => {
  const path = useRouteMatch();
  const { params } = path;
  const { authorName } = params;

  const [link, setLink] = useState(
    `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}&limit=3`
  );
  const [values] = useFetch(link);

  const { data, loading, error } = values;

  const element = loading 
    ? <h2> Loading... </h2> 
    : data.data.map(quote => <Quote {...quote} key={quote._id}/>)

  return (
    <div>
      <h1> {authorName} </h1>
      { element }
    </div>
  );
};
