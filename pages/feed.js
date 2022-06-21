import React, { useState, useEffect } from "react";
import config from "../config";
import { Flex, Box, Button, Image, Spinner } from "@chakra-ui/react";
import Carousel from "../src/components/Carousel/carousel";
import Link from "next/link";

const Feed = () => {
  const [phrases, setPhrases] = useState([]);
  useEffect(() => {
    async function getPhrases() {
      const response = await fetch(`${config.API_URL}/phrases`);
      const data = await response.json();
      setPhrases(data.payload);
    }
    getPhrases();
  }, []);

  return (
    <>
      <Box h="100vh" display="flex" flexDirection="column">
        <Flex m=".8em" alignSelf={"flex-end"}>
          <Button
            bg="none"
            py="1em"
            _hover={"none"}
            _after={"none"}
            _visited={"none"}
            _active={"none"}
          >
            <Link href={"/"}>
              <Image
                w="1.7em"
                src="https://svgshare.com/i/iQf.svg"
                alt="close"
              />
            </Link>
          </Button>
        </Flex>
        {phrases.length > 1 ? (
          <>
            <Box
              display="flex"
              mt={{ md: "4em" }}
              alignItems="center"
              justifyContent="center"
            >
              <Flex alignItems="center" justifyContent="center" my="3em"></Flex>
              <Carousel phrases={phrases} />
            </Box>
          </>
        ) : (
          <>
            <Spinner color={"#53DB68"} />
          </>
        )}
      </Box>
    </>
  );
};

export default Feed;
