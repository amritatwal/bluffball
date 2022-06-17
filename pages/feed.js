import React, { useState, useEffect } from "react";
import config from "../config";
import { Flex, Box, Progress } from "@chakra-ui/react";
import Carousel from "../src/components/Carousel/carousel";

const Feed = () => {
  const [phrases, setPhrases] = useState([]);
  // const [index, setIndex] = useState();

  useEffect(() => {
    async function getPhrases() {
      const response = await fetch(`${config.API_URL}/phrases`);
      const data = await response.json();
      setPhrases(data.payload);
    }
    getPhrases();
  }, []);

  // function updateProgressBar(item) {
  //   setIndex(item);
  //   console.log(index);
  // }

  return (
    <Box h="100vh">
      {phrases.length > 1 ? (
        <>
          <Box
            display="flex"
            mt={{ base: "2em", md: "4em" }}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Progress
              value={index}
              min={0}
              max={phrases.length}
              w="50em"
              borderRadius="25px"
              h="2em"
              size="xs"
              colorScheme="green"
            /> */}
          </Box>
          <Flex alignItems="center" justifyContent="center" my="3em"></Flex>
          <Carousel phrases={phrases} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Feed;
