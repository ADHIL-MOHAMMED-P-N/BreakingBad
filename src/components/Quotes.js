import React from "react";
import "../App.css";

const Quotes = ({ quotes }) => {
  return (
    <div className="quotes__container">
      <h1 className="heading">Quotes</h1>
      {quotes.map((item) => {
        const { quote, author } = item;
        return (
          <div className="quotes__card">
            <h1>{quote}</h1>
            <h2>{author}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
