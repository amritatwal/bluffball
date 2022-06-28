import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Header from "../src/components/Text/Header/header";

export default function Landing() {
  return (
    <>
      <Flex
        alignItems="center"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        h={"calc(100vh - 8em)"}
        justifyContent="center"
        w="100%"
      >
        <Flex
          color="#494949"
          justifyContent="flex-end"
          h="100%"
          flexDirection="column"
          w="100%"
          p="4em"
        >
          <Text fontSize={{ base: "2.1em", md: "5em" }} fontWeight="800">
            Learn how to talk the talk.
          </Text>
          <Box my="1em">
            <Text fontSize={{ base: ".8em", md: "1.3em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Flex>
        <Flex
          justifyContent="center"
          h="100%"
          flexDirection="column"
          w="100%"
          p="4em"
        >
          <Flex flexDirection="column">
            <Text
              color="#53DB68"
              fontSize={{ base: "1.4em", md: "1.8em" }}
              fontWeight="800"
            >
              Build your conversation skills.
            </Text>
            <Text
              color="#494949"
              fontSize={{ base: ".8em", md: "1.1em" }}
              fontWeight="500"
              py=".5em"
            >
              Bluffball is updated daily with phrases and our pronunciation
              guide offers you audio transcriptions so you can sound like an
              absolute <em>pro</em>.
            </Text>
          </Flex>
          <Flex flexDirection="column" my={{ base: "1em", md: "6em" }}>
            <Text
              color="#53DB68"
              fontSize={{ base: "1.4em", md: "1.8em" }}
              fontWeight="800"
            >
              Stay in the loop wherever you are.
            </Text>
            <Text
              color="#494949"
              fontSize={{ base: ".8em", md: "1.1em" }}
              fontWeight="500"
              py=".5em"
            >
              Get new phrases sent straight to your phone so you can receive
              assistance whether you’re at a match or at the office.
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              color="#53DB68"
              fontSize={{ base: "1.4em", md: "1.8em" }}
              fontWeight="800"
            >
              Never be caught out again.
            </Text>
            <Text
              color="#494949"
              fontSize={{ base: ".8em", md: "1.1em" }}
              fontWeight="500"
              py=".5em"
            >
              It’s our job to help you sound like you know your stuff when you
              don’t. At Bluffball you have access to results, upcoming fixtures
              and library of football players to “bluff” about.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
