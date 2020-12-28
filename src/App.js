import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Characters from "./components/Characters";

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

      <Characters characters={characters} search={search} />
    </>
  );
};

export default App;
