import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [num, setNum] = useState();
  const [name, setNames] = useState();
  const [moves, setMove] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setNames(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  });
  return (
    <div className="App">
      <h1>You choose {num} value.</h1>
      <h1>My name is {name}.</h1>
      <h1>I have {moves} moves.</h1>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
}

export default App;
