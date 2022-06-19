import { useState } from "react";
import { Input, Button, ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";

export const ChildArea = (props) => {
  const { t1, t2 } = props;
  const [toggle, setToggle] = useState(true);
  const onClickToggle = () => setToggle(!toggle);
  return (
    <Button w='100%' colorScheme={toggle ? 'blue' : 'pink'} onClick={onClickToggle}>{toggle ? t1 : t2}</Button>
  );
};
