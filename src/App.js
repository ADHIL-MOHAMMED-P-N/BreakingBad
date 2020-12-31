import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Quotes from "./components/Quotes";
import Deaths from "./components/Deaths";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

//url of characters
const url = "https://breakingbadapi.com/api/characters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  //fetch function
  const getCharacters = async () => {
    const response = await fetch(url);
    const characterList = await response.json();
    setCharacters(characterList);
  };

  useState(() => {
    getCharacters();
  }, []);

  //searching

  const searchItem = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Router>
        <Nav />

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

        <Route path="/episodes" exact>
          <Episodes />
        </Route>
        <Route path="/" exact>
          <Characters characters={characters} search={search} />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/deaths" exact>
          <Deaths />
        </Route>
      </Router>
    </>
  );
};

export default App;
