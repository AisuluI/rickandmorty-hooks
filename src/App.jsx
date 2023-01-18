import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import BackButton from "./BackButton";
import ShowModal from "./ShowModal";

const api = "https://rickandmortyapi.com/api/character/?page=";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);

  //console.log(characters);
  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    fetchData(api);
  }, []);

  useEffect(() => {
    fetchData(`${api}${pages}`);
  }, [pages]);

  const next = () => {
    setPages(pages + 1);
  };

  const back = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };

  return (
    <div className="container">
      <h2>Ricky and Morty Project with Hooks</h2>

      <div className="page-btn">
        <span>Page {pages}</span>
        <BackButton pages={pages} back={back} />
        <button className="next" onClick={next}>
          Next
        </button>
      </div>

      <div className="App">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
