import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Quotes from "./components/Quotes";
import Deaths from "./components/Deaths";
import { Route, BrowserRouter as Router } from "react-router-dom";

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

  useEffect(() => {
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

        <Route path="/episodes" exact>
          <Episodes />
        </Route>
        <Route path="/" exact>
          <Characters
            characters={characters}
            search={search}
            searchItem={searchItem}
          />
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
