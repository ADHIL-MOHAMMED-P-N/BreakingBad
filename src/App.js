import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Characters from "./components/Characters";

const url = "https://breakingbadapi.com/api/characters";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(url);
    const characterList = await response.json();
    console.log(characterList);
  };

  useState(() => {
    getCharacters();
  });

  return (
    <>
      <Nav />
      <h1 className="heading">Characters</h1>
      <Characters />
    </>
  );
};

export default App;
