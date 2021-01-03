import React, { useState } from "react";
import "../App.css";
import "./Episodes.css";

const Episodes = ({ episodes }) => {
  //filtering season and episode
  const [season, setSeason] = useState("all");
  const [episode, setEpisode] = useState("all");

  const seasonSearch = (val) => {
    setSeason(val);
  };

  const episodeSearch = (val) => {
    setEpisode(val);
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
        <option value="5">Season 5</option>
      </select>
      {/* -----------------------episode search------------------ */}
      <label for="episode">Choose a Episode: </label>
      <select
        name="episode"
        id="episode"
        onClick={(event) => {
          episodeSearch(event.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="1">Episode 1</option>
        <option value="2">Episode 2</option>
        <option value="3">Episode 3</option>
        <option value="4">Episode 4</option>
        <option value="5">Episode 5</option>
        <option value="6">Episode 6</option>
        <option value="7">Episode 7</option>
        <option value="8">Episode 8</option>
        <option value="9">Episode 9</option>
        <option value="10">Episode 10</option>
        <option value="11">Episode 11</option>
        <option value="12">Episode 12</option>
        <option value="13">Episode 13</option>
        <option value="14">Episode 14</option>
        <option value="15">Episode 15</option>
        <option value="16">Episode 16</option>
      </select>

      <div className="episode__container">
        {episodes
          .filter((item) => {
            if (item.series == "Breaking Bad") {
              return item;
            }
          })
          .filter((item) => {
            if (season == "all") {
              return item;
            } else if (season == item.season) {
              return item;
            }
          })
          .filter((item) => {
            if (episode == "all") {
              return item;
            } else if (episode == item.episode) {
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
