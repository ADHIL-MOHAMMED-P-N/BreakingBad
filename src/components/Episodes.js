import React from "react";
import "../App.css";
import "./Episodes.css";

const Episodes = ({ episodes }) => {
  return (
    <>
      <h1 className="heading">Episodes</h1>
      <div className="episode__container">
        {episodes.map((item) => {
          const { title, season, air_date, characters, episode } = item;
          return (
            <div className="episode__card">
              <div className="left-col">
                <h1>{title}</h1>
                <h3>
                  Season:{season},Episode:{episode}
                </h3>
                <h2>{air_date}</h2>
              </div>
              <div className="right-col">
                <ul>
                  {characters.map((char) => {
                    return <li>{char}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Episodes;
