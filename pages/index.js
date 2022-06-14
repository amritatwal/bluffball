import { Flex } from "@chakra-ui/react";
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
        width="100vw"
        height="100vh"
        m="0"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex flexDirection={"column"}>
          <Header
            fontSize={{ base: "2em", md: "4em" }}
            text="It's your guide&nbsp;"
            fontWeight="400"
          />
          <Flex display="flex" flexDirection="row">
            <Header
              fontSize={{ base: "2em", md: "4em" }}
              text="to&nbsp;"
              fontWeight="400"
            />
            <Header
              fontSize={{ base: "2em", md: "4em" }}
              text="football parlance."
              fontWeight="800"
            />
          </Flex>
        </Flex>
        {/* <Flex>
          <PrimaryButton text="get started" />
          <SecondaryButton text="jump back in" />
        </Flex> */}
      </Flex>
    </>
  );
}
