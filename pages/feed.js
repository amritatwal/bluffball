import React, { useState, useEffect } from "react";
import config from "../config";
import { Flex, Box, Button, Image } from "@chakra-ui/react";
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
      <Box display="flex" flexDirection="column">
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
            <Box display="flex" alignItems="center" justifyContent="center">
              <Carousel phrases={phrases} />
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default Feed;
