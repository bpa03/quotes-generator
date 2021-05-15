import React from "react";

export const Quote = ({ text, styles }) => {
  return (
    <>
      <h4 className="quotes__text" {...styles}>"{text}"</h4>
    </>
  );
};
