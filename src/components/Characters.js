import React from "react";
import "./Characters.css";
import "../App.css";
const Characters = (props) => {
  const { characters, search, searchItem } = props;
  return (
    <>
      <h1 className="heading">Characters</h1>
      <div className="input">
        <input
          className="search__input"
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            searchItem(event.target.value);
          }}
        />
      </div>
      <div className="container">
        {characters
          .filter((item) => {
            if (search === "") {
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
                  <img src={img} alt="character" />
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
