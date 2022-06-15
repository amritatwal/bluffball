import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const PhraseCard = ({ quote }) => {
  return (
    <Flex>
      <Text>{quote}</Text>
    </Flex>
  );
};

export default PhraseCard;
