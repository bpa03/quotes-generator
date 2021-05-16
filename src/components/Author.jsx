import React from "react";

export const Author = ({ author, genre }) => {
  return (
    <>
      <a className="quotes__author-link" href={`authors/${author}`}>
        <div className="quotes__author-info">
          <h4 className="quotes__author"> {author} </h4>
          <span className="quotes__genre"> {genre} </span>
        </div>
        <span className="material-icons quotes__author-arrow-icon">trending_flat</span>
      </a>
    </>
  );
};
