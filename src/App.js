import { useState, useEffect } from "react";
import './App.css';
import { ChildArea } from "./ChildArea";
import { CounterState } from "wasm";

const counter_state = CounterState.new();

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [textCounter, setTextCounter] = useState(-1);
  const onChangeText1 = (e) => setText1(e.target.value);
  const onChangeText2 = (e) => setText2(e.target.value);
  const [cards, setCards] = useState([]);
  const onClickReset = () => {
    setCards([]);
    setText1("");
    setText2("");
    counter_state.set_counter(0);
    setTextCounter(0);
  };
  const onClickOpen = () => {
    setCards([...cards, { id:textCounter + 1, text1, text2 }]);
    setText1("");
    setText2("");
    setTextCounter(counter_state.increment_counter());
  };
  const onClickShuffle = () => {
    cards.sort(() => Math.random() - 0.5);
    setCards(cards.slice(0, cards.length));
  };
  useEffect(() => {
    if(Number(textCounter) !== -1) {
      localStorage.setItem("wordlist", JSON.stringify(cards));
    }
  },[textCounter]);
  useEffect(() => {
    var saved_cards = JSON.parse(localStorage.getItem("wordlist"));
    if(saved_cards === null) {
      saved_cards = [];
    }
    setCards(saved_cards);
    counter_state.set_counter(saved_cards.length);
    setTextCounter(saved_cards.length);
  },[]);
  return (
    <div className="App">
      <input value={text1} onChange={onChangeText1} />
      <input value={text2} onChange={onChangeText2} />
      現在{textCounter}問登録済みです。
      <br />
      <br />
      <button onClick={onClickOpen}>Add</button>
      <button onClick={onClickShuffle}>Shuffle</button>
      <button onClick={onClickReset}>Reset</button>
      {cards.map((v) => {
        return <ChildArea key={v.id} t1={v.text1} t2={v.text2} />;
      })}
    </div>
  );

}

export default App;
