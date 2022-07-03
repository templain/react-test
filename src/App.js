import { useState, useEffect, useCallback } from "react";
import './App.css';
import { ChildArea } from "./ChildArea";
import init, { update_number } from "wasm";
import { Input, Button, ChakraProvider, Box, Flex, Text, VStack, HStack, Heading, Center } from "@chakra-ui/react";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const onChangeText1 = (e) => setText1(e.target.value);
  const onChangeText2 = (e) => setText2(e.target.value);
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const onClickReset = () => {
    setCards([]);
    setText1("");
    setText2("");
  };
  const onClickOpen = () => {
    if(text1 && text2) {
      var cnt = cards.length + 1;
      setCards([...cards, { id:cnt, text1, text2 }]);
      setText1("");
      setText2("");
    }
  };
  const onClickShuffle = () => {
    cards.sort(() => Math.random() - 0.5);
    setCards(cards.slice(0, cards.length));
  };
  const onClickDeleteButton = useCallback((id) => {
    setCards(cards.filter(row => row.id !== id)
    .map(row => {
      return {
        id:(row.id < id ? row.id : row.id - 1), 
        text1:row.text1, 
        text2:row.text2
      };
    }));
  }, [cards]);

  useEffect(() => {
    if(loaded) {
      localStorage.setItem("wordlist", JSON.stringify(cards));
      update_number(cards.length, "mytest");
    }
  },[cards]);
  
  useEffect(() => {
    (async() => {
      await init();
      var saved_cards = JSON.parse(localStorage.getItem("wordlist"));
      if(saved_cards === null) {
        saved_cards = [];
      }
      setCards(saved_cards);
      setLoaded(true);
    })();
  }, []);
 
  return (
    <ChakraProvider>
      <Box m={4}>
        <Center my='5'>
          <Heading>単語カード</Heading>
        </Center>
        <Flex align='center' justify='center'>
          <Text fontSize='5xl'>現在</Text><div id='mytest'><span>?</span></div><Text fontSize='5xl'>問登録済みです。</Text>
        </Flex>
        <Flex>
          <Input mx='2' placeholder='Question' value={text1} onChange={onChangeText1} />
          <Input mx='2' placeholder='Answer' value={text2} onChange={onChangeText2} />
        </Flex>
        <HStack p={1}>
          <Button colorScheme='teal' onClick={onClickOpen} isDisabled={!loaded}>Add</Button>
          <Button colorScheme='teal' onClick={onClickShuffle} isDisabled={!loaded}>Shuffle</Button>
          <Button colorScheme='red' onClick={onClickReset} isDisabled={!loaded}>Reset</Button>
        </HStack>
        <VStack p={1}>
          {cards.map((v) => {
            return <ChildArea key={v.id} id={v.id} t1={v.text1} t2={v.text2} onClickDeleteButton={onClickDeleteButton} />;
          })}
        </VStack>
      </Box>
    </ChakraProvider>
  );

}

export default App;
