import React, { useState } from "react";
import {
  Text,
  Flex,
  Box,
  Link,
  Badge,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import Header from "../src/components/Text/Header/header";
import TeamChoice from "../src/components/TeamChoice/teamChoice";
import teams from "../src/lib/teams";
import { RadioGroup } from "@chakra-ui/react";
import PrimaryButton from "../src/components/Buttons/PrimaryButton/primaryButton";

export default function Register() {
  const [options, setOptions] = useState([]);

  function handleCheckbox(choice) {
    setOptions([...options, choice]);
  }

  function setAllOptions() {
    console.log("Skip has been clicked on");
  }

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        my="2em"
      >
        <Alert
          color="#c6c6c6"
          background="#f5fdf6"
          fontSize=".9em"
          fontWeight="400"
          my="1em"
          status="info"
          w="auto"
        >
          <AlertIcon />
          Bluffball is still in beta mode so we are only offering Arsenal as an
          option.
        </Alert>
        <form method="post" action="/">
          <Text
            color="lightgrey"
            fontSize=".9em"
            fontWeight="600"
            letterSpacing="2px"
            my="1em"
            textTransform="uppercase"
          >
            1 of 4
          </Text>
          <legend>
            <Header
              fontSize="2em"
              fontWeight="800"
              colour="#53DB68"
              text="Choose your teams"
            />
          </legend>
          <RadioGroup>
            {teams.map((team, index) => {
              return (
                <TeamChoice
                  key={index}
                  team={team}
                  handleCheckbox={handleCheckbox}
                />
              );
            })}
          </RadioGroup>
        </form>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          my="2em"
        >
          <PrimaryButton text={"Continue"} route={"/"} />
          <Link
            color="lightgrey"
            fontSize=".9em"
            fontWeight="600"
            letterSpacing="2px"
            my="1em"
            textTransform="uppercase"
            onClick={setAllOptions}
          >
            Skip
          </Link>
        </Box>
      </Flex>
    </>
  );
}
