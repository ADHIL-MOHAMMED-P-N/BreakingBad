import React, { useState } from "react";
import "../App.css";
import "./Episodes.css";

const Episodes = ({ episodes }) => {
  //filtering season
  const [season, setSeason] = useState("all");
  const seasonSearch = (val) => {
    setSeason(val);
  };
  return (
    <>
      <h1 className="heading">Episodes</h1>
      <label for="season">Choose a Season : </label>

      <select
        name="Season"
        id="season"
        onClick={(event) => {
          seasonSearch(event.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="1">Season 1</option>
        <option value="2">Season 2</option>
        <option value="3">Season 3</option>
        <option value="4">Season 4</option>
      </select>

      <div className="episode__container">
        {episodes
          .filter((item) => {
            if (season == "all") {
              return item;
            } else if (season == item.season) {
              return item;
            }
          })
          .map((item) => {
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
