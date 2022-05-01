import { useState } from "react";
import './App.css';
import { ChildArea } from "./ChildArea";

function App() {
  console.log("App");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const onChangeText1 = (e) => setText1(e.target.value);
  const onChangeText2 = (e) => setText2(e.target.value);
  const [cards, setCards] = useState([]);
  const onClickOpen = () => {
    setCards([...cards, { text1, text2 }]);
    setText1("");
    setText2("");
  };
  const onClickShuffle = () => {
    cards.sort(() => Math.random() - 0.5);
    setCards(cards.slice(0, cards.length));
  };
  return (
    <div className="App">
      <input value={text1} onChange={onChangeText1} />
      <input value={text2} onChange={onChangeText2} />
      <br />
      <br />
      <button onClick={onClickOpen}>Add</button>
      <button onClick={onClickShuffle}>Shuffle</button>
      {cards.map((v) => {
        return <ChildArea t1={v.text1} t2={v.text2} />;
      })}
    </div>
  );

}

export default App;
