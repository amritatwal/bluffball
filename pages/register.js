import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import Header from "../src/components/Text/Header/header";
import TeamChoice from "../src/components/TeamChoice/teamChoice";
import teams from "../src/lib/teams";
import { RadioGroup } from "@chakra-ui/react";

export default function Register() {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        my="2em"
      >
        <form method="post" action="/">
          <Text>1 of 4</Text>
          <legend>
            <Header
              fontSize="2em"
              fontWeight="800"
              colour="#53DB68"
              text="Choose your teams"
            />
          </legend>
          <RadioGroup>
            {teams.map((team) => {
              return <TeamChoice team={team} />;
            })}
          </RadioGroup>
        </form>
      </Flex>
    </>
  );
}
