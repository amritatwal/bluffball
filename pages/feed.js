import React, { useState, useEffect } from "react";
import config from "../config";
import { Flex, Box, Progress } from "@chakra-ui/react";
import Carousel from "../src/components/Carousel/carousel";

const Feed = () => {
  const [phrases, setPhrases] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    async function getPhrases() {
      const response = await fetch(`${config.API_URL}/phrases`);
      const data = await response.json();
      setPhrases(data.payload);
    }
    getPhrases();
  }, []);

  function updateProgressBar(item) {
    console.log(item, phrases.length);
    setStatus(item + 1);
  }

  return (
    <Box h="100vh">
      {phrases.length > 1 ? (
        <>
          <Box
            display="flex"
            mt="4em"
            alignItems="center"
            justifyContent="center"
          >
            <Progress
              value={status}
              min={1}
              max={phrases.length}
              w="50em"
              borderRadius="25px"
              h="2em"
              size="xs"
              colorScheme="green"
            />
          </Box>
          <Flex alignItems="center" justifyContent="center" my="3em"></Flex>
          <Carousel phrases={phrases} updateProgressBar={updateProgressBar} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Feed;
