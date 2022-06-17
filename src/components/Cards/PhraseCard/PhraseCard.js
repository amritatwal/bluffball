import React from "react";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import Header from "../../Text/Header/header";
import Share from "../../Buttons/Share/share";
import icons from "../../../lib/icons";

const PhraseCard = ({ quote, club }) => {
  const icon = icons.find((icon) => icon.club === club);

  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Box
        m="1em"
        px="3em"
        borderRadius="25px"
        border={"solid 1px #e1e1e1"}
        w="50em"
        minH="20em"
        maxH="30em"
      >
        <Flex flexDirection="column" alignItems="center">
          <Box pt="1em" display="flex" flexDirection="row">
            {icon ? (
              <Image mr=".5em" w="1.1em" h="auto" src={icon.src} />
            ) : (
              <></>
            )}
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
                src={"https://svgshare.com/i/iN6.svg"}
                alt="heart"
              />
              <img
                width="45em"
                height="auto"
                src={"https://svgshare.com/i/iMz.svg"}
                alt="sound"
              />
              <Share />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PhraseCard;
