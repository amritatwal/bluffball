import { Flex, Box } from "@chakra-ui/react";
import Header from "../src/components/Text/Header/header";

export default function Landing() {
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h={"calc(100vh - 8em)"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flexDirection={"row"}
          mb="1em"
          alignItems="center"
          justifyContent="center"
        >
          <Flex flexDirection={"column"}>
            <Header
              fontSize={{ base: "1.8em", md: "4em" }}
              text="It's your guide&nbsp;"
              fontWeight="400"
              colour="#2c2c2c"
            />
            <Flex display="flex" flexDirection="row">
              <Header
                fontSize={{ base: "1.8em", md: "4em" }}
                text="to&nbsp;"
                fontWeight="400"
                colour="#2c2c2c"
              />
              <Header
                fontSize={{ base: "1.8em", md: "4em" }}
                text="football parlance."
                fontWeight="800"
                colour="#2c2c2c"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
