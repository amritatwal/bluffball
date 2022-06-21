import { Flex, Box } from "@chakra-ui/react";
import PrimaryButton from "../src/components/Buttons/PrimaryButton/primaryButton";
import Header from "../src/components/Text/Header/header";

export default function Home() {
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h={"calc(100vh - 8em)"}
        flexDirection={{ base: "column", md: "column" }}
      >
        <Flex flexDirection={"column"} mb="1em">
          <Header
            fontSize={{ base: "1.8em", md: "4em" }}
            text="It's your guide&nbsp;"
            fontWeight="400"
            color="#333232"
          />
          <Flex display="flex" flexDirection="row">
            <Header
              fontSize={{ base: "1.8em", md: "4em" }}
              text="to&nbsp;"
              fontWeight="400"
              color="#333232"
            />
            <Header
              fontSize={{ base: "1.8em", md: "4em" }}
              text="football parlance."
              fontWeight="800"
              color="#333232"
            />
          </Flex>
          <Box mt={{ base: "2em", md: "3.5em" }} alignSelf="center">
            <PrimaryButton text={"Start"} size={"md"} route={"/feed"} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
