import { Flex, Box } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import PrimaryButton from "../src/components/Buttons/PrimaryButton/primaryButton";
import SecondaryButton from "../src/components/Buttons/SecondaryButton/secondaryButton";
import Header from "../src/components/Text/Header/header";

export default function Home() {
  const { user } = useUser();
  console.log(user);
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
          </Flex>
          <Box display="flex" flexDirection="column" h="100%" mx="2em" p="2em">
            <Box my=".5em">
              <PrimaryButton text={"GET STARTED"} route={"/register"} />
            </Box>
            <Box my=".5em">
              <SecondaryButton text={"JUMP BACK IN"} route={"/feed"} />
            </Box>
          </Box>
        </Flex>
        <a href="/api/auth/logout">log out</a>
      </Flex>
    </>
  );
}
