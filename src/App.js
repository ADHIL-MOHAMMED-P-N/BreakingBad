import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Quotes from "./components/Quotes";
import Deaths from "./components/Deaths";
import { Route, BrowserRouter as Router } from "react-router-dom";

//url of characters
const urlChar = "https://breakingbadapi.com/api/characters";
const urlEpi = "https://breakingbadapi.com/api/episodes";
const urlQuo = "https://breakingbadapi.com/api/quotes";
const urlDeaths = "https://breakingbadapi.com/api/deaths";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [deaths, setDeaths] = useState([]);
  //fetch function
  const getCharacters = async () => {
    const response = await fetch(urlChar);
    const characterList = await response.json();
    setCharacters(characterList);
  };
  const getEpisodes = async () => {
    const response = await fetch(urlEpi);
    const episodesList = await response.json();
    setEpisodes(episodesList);
  };
  const getQuotes = async () => {
    const response = await fetch(urlQuo);
    const quotesList = await response.json();
    setQuotes(quotesList);
  };
  const getDeaths = async () => {
    const response = await fetch(urlDeaths);
    const deathsList = await response.json();
    setDeaths(deathsList);
  };
  useEffect(() => {
    getCharacters();
    getEpisodes();
    getQuotes();
    getDeaths();
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
          <Episodes episodes={episodes} />
        </Route>
        <Route path="/" exact>
          <Characters
            characters={characters}
            search={search}
            searchItem={searchItem}
          />
        </Route>
        <Route path="/quotes" exact>
          <Quotes quotes={quotes} />
        </Route>
        <Route path="/deaths" exact>
          <Deaths deaths={deaths} />
        </Route>
      </Router>
    </>
  );
};
export default App;
