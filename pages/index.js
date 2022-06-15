import { Flex, Box } from "@chakra-ui/react";
import PrimaryButton from "../src/components/Buttons/PrimaryButton/primaryButton";
import SecondaryButton from "../src/components/Buttons/SecondaryButton/SecondaryButton";
import Header from "../src/components/Text/Header/header";

export default function Home() {
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        m="0"
        w="100vw"
        h="100vh"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex flexDirection={"column"}>
          <Header
            fontSize={{ base: "2em", md: "4em" }}
            text="It's your guide&nbsp;"
            fontWeight="400"
            color="#333232"
          />
          <Flex display="flex" flexDirection="row">
            <Header
              fontSize={{ base: "2em", md: "4em" }}
              text="to&nbsp;"
              fontWeight="400"
              color="#333232"
            />
            <Header
              fontSize={{ base: "2em", md: "4em" }}
              text="football parlance."
              fontWeight="800"
              color="#333232"
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" ml="3em">
          <Box mb=".5em">
              <PrimaryButton text="get started" size={"lg"} route={"/register"} />
          </Box>
          <SecondaryButton text="jump back in" size={"lg"} />
        </Flex>
      </Flex>
    </>
  );
}
