import { Flex, Text, Box } from "@chakra-ui/react";
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
        border={"solid 1px blue"}
      >
        <Flex
          justifyContent="flex-end"
          h="100%"
          flexDirection="column"
          w="100%"
          p="2em"
        >
          <Header
            fontSize={{ base: "1.8em", md: "3.8em" }}
            text="Learn how to talk the talk."
            fontWeight="800"
            colour="#2c2c2c"
          />
          <Box my="1em">
            <Text fontSize={{ base: ".8em", md: "1.3em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Flex>
        <Flex h="100%" w="100%">
          <Header
            fontSize={{ base: "1.8em", md: "3.8em" }}
            text="Learn how to talk the talk."
            fontWeight="800"
            colour="##53DB68"
          />
        </Flex>
      </Flex>
    </>
  );
}
