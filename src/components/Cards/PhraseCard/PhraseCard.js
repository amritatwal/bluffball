import React from "react";
import { Text, Flex, Box, Spacer } from "@chakra-ui/react";
import Header from "../../Text/Header/header";

const PhraseCard = ({ quote, club }) => {
  console.log(quote);
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Box
        m="1em"
        px="3em"
        borderRadius="25px"
        border={"solid 1px #e1e1e1"}
        w="50em"
        h="25em"
      >
        <Flex flexDirection="column" alignItems="center">
          <Box pt="1em">
            <Text
              color="grey"
              fontWeight="700"
              textTransform="uppercase"
              my="1em"
            >
              {club}
            </Text>
          </Box>
          <Flex py="2em" display="flex" px="1em">
            <Header
              fontSize={"3em"}
              text={quote}
              fontWeight="600"
              colour="#333232"
            />
          </Flex>
          <Box
            my="2em"
            pt="2em"
            w="100%"
            h="6em"
            borderTop={"solid 1px #e1e1e1"}
          >
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent={"space-evenly"}
            >
              <img
                width="25em"
                height="auto"
                src={"https://svgshare.com/i/iNL.svg"}
                alt="ellipsis"
              />
              <img
                width="45em"
                height="auto"
                src={"https://svgshare.com/i/iMz.svg"}
                alt="sound"
              />
              <img
                width="25em"
                height="auto"
                src={"https://svgshare.com/i/iN6.svg"}
                alt="heart"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PhraseCard;
