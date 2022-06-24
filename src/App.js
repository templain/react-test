import { useState, useEffect } from "react";
import './App.css';
import { ChildArea } from "./ChildArea";
import { CounterState } from "wasm";
import { Input, Button, ChakraProvider, Box, Flex, Text, VStack, HStack, Heading, Center } from "@chakra-ui/react";

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
    if(text1 && text2) {
      setCards([...cards, { id:textCounter + 1, text1, text2 }]);
      setText1("");
      setText2("");
      setTextCounter(counter_state.increment_counter());
    }
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
    <ChakraProvider>
      <Box m={4}>
        <Center my='5'>
          <Heading>単語カード</Heading>
        </Center>
        <Text>現在{textCounter}問登録済みです。</Text>
        <Flex>
          <Input mx='2' placeholder='Question' value={text1} onChange={onChangeText1} />
          <Input mx='2' placeholder='Answer' value={text2} onChange={onChangeText2} />
        </Flex>
        <HStack p={1}>
          <Button colorScheme='teal' onClick={onClickOpen}>Add</Button>
          <Button colorScheme='teal' onClick={onClickShuffle}>Shuffle</Button>
          <Button colorScheme='red' onClick={onClickReset}>Reset</Button>
        </HStack>
        <VStack p={1}>
          {cards.map((v) => {
            return <ChildArea key={v.id} t1={v.text1} t2={v.text2} />;
          })}
        </VStack>
      </Box>
    </ChakraProvider>
  );

}

export default App;
