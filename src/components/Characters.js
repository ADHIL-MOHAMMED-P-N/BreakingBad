import React from "react";
import "./Characters.css";
const Characters = (props) => {
  const { characters, search } = props;
  return (
    <>
      <div className="container">
        {characters
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((char) => {
            const { id, name, img } = char;
            return (
              <div className="card" key={id}>
                <div className="card__body">
                  <img src={img} alt={name} />
                </div>
                <div className="card__footer">
                  <h1 className="card__heading">{name}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Characters;
