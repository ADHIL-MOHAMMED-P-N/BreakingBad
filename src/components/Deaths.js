import React from "react";
import "../App.css";
const Deaths = ({ deaths }) => {
  console.log(deaths);
  return (
    <div>
      <h1 className="heading">Deaths</h1>
      {
        <div className="deaths__container">
          {deaths.map((item) => {
            const {
              death,
              cause,
              responsible,
              last_words,
              season,
              episode,
            } = item;
            return (
              <div className="death__card">
                <h1>{death}</h1>
                <p>{cause}</p>
                <h2>{responsible}</h2>
                <h3>{last_words}</h3>
                <p>
                  Season:{season},Episode:{episode}
                </p>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Deaths;
