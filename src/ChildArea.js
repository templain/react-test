import { useState,memo } from "react";
import { Button, HStack } from "@chakra-ui/react";

export const ChildArea = memo((props) => {
  const { id, t1, t2, onClickDeleteButton } = props;
  const [toggle, setToggle] = useState(true);
  const onClickToggle = () => setToggle(!toggle);

  return (
    <HStack px={1} w='100%'>
      <Button size='lg' w='95%' colorScheme={toggle ? 'blue' : 'pink'} onClick={onClickToggle}>{toggle ? t1 : t2}</Button>
      <Button size='lg' w='5%' colorScheme='red' onClick={() => onClickDeleteButton(id)}>×</Button>
    </HStack>
  );
});
