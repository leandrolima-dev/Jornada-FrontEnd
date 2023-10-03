import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  // const item1 = {
  //   nome: "Rick Sanchez",
  //   imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //   tags: [ "Status: Vivo", "Espécie: Humana", "Origem: Terra C-137" ],
  // };

  // const item2 = {
  //   nome: "Morty Smith",
  //   imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  //   tags: [ "Status: Vivo", "Espécie: Humana", "Origem: Terra C-137" ],
  // };
  // const item3 = {
  //   nome: "Summer Smith",
  //   imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  //   tags: [ "Status: Vivo", "Espécie: Humana", "Origem: Terra C-137" ],
  // };

  // const itens = [item1, item2, item3];

  const [itens, setItens] = useState([]);
  async function getDadosApi() {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const json = await response.json();
    const results = json.results;

    console.log("json", results);
    setItens(results);
  }

  useEffect(() => {
    getDadosApi();
  }, []);

  return (
    <>
      <Header />

      <div className="card-list">
        {itens.map(function (item, index) {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
