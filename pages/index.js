import { Flex, Text, Box } from "@chakra-ui/react";
import PrimaryButton from "../src/components/Buttons/PrimaryButton/primaryButton";
import Header from "../src/components/Text/Header/header";

export default function Landing() {
  return (
    <>
      <Flex
        alignItems="center"
        display="flex"
        flexDirection="column"
        h={"calc(100vh - 8em)"}
        w="100%"
      >
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          my="3em"
          w={{ base: "40em", md: "60em" }}
        >
          <Header
            fontSize={{ base: "2em", md: "4em" }}
            fontWeight="800"
            colour="#494949"
            text={"Learn how to talk the talk."}
          />
          <Text
            color="#A0A0A0"
            fontSize={{ base: ".8em", md: "1.1em" }}
            textAlign="center"
            py="1em"
          >
            Are you sick of feeling out of the loop? Don't get left out of the
            conversations. Impress your friends and colleagues with Bluffball's
            handy phrases. Go on and let Bluffball help transform yourself into
            the football expert you want your mates to think you are.
          </Text>
          <Box mt={{ base: ".5em", md: "1em" }}>
            <PrimaryButton text={"Get started"} route={"/feed"} />
          </Box>
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={{ base: "2em", md: "3em" }}
          textAlign="center"
        >
          <Box
            borderRadius="12px"
            display="flex"
            h={{ base: "10em", md: "18em" }}
            flexDirection="column"
            w={{ base: "10em", md: "25em" }}
            mx="2em"
            px="2em"
          >
            <Text
              color="#494949"
              fontSize={{ base: "1.3em", md: "2em" }}
              fontWeight="800"
              pt="1.3em"
            >
              Build your conversation skills.
            </Text>
            <Text color="#A0A0A0" my="1em">
              Bluffball is updated daily with phrases and our pronunciation
              guide offers you audio transcriptions so you can sound like a pro.
            </Text>
          </Box>
          <Box
            borderRadius="12px"
            display="flex"
            h={{ base: "10em", md: "18em" }}
            flexDirection="column"
            w={{ base: "10em", md: "25em" }}
            mx="2em"
            px="2em"
          >
            <Text
              color="#494949"
              fontSize={{ base: "1.3em", md: "2em" }}
              fontWeight="800"
              pt="1.3em"
            >
              You'll never be caught out again.
            </Text>
            <Text color="#A0A0A0" my="1em">
              It’s our job to help you sound like you know your stuff when you
              don’t. You’ll have access to results, upcoming fixtures and a
              whole library of football players to bluff about.
            </Text>
          </Box>
          <Box
            borderRadius="12px"
            display="flex"
            h={{ base: "10em", md: "18em" }}
            flexDirection="column"
            w={{ base: "10em", md: "25em" }}
            mx="2em"
            px="2em"
          >
            <Text
              color="#494949"
              fontSize={{ base: "1.3em", md: "2em" }}
              fontWeight="800"
              pt="1.3em"
            >
              Stay in the loop wherever you are.
            </Text>
            <Text color="#A0A0A0" my="1em">
              Get new phrases sent straight to your phone so you can recieve
              assistance whether you’re at a match or at the office.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
