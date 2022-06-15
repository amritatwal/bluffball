import React from "react";
import { Text, Flex } from "@chakra-ui/react";
// import css from "./teamChoice.module.css";
import { Checkbox } from "@chakra-ui/react";

const TeamChoice = ({ team }) => {
  return (
    <>
      <Flex
        my="1em"
        px="1em"
        py=".2em"
        borderRadius="25px"
        border={"solid 1px #e1e1e1"}
        w={{ md: "40em" }}
      >
        <Flex flexGrow={1}>
          <Text
            fontSize="1.4em"
            fontWeight="600"
            color="#333232"
            letterSpacing="1px"
          >
            {team}
          </Text>
        </Flex>
        <Flex>
          <Checkbox size="lg" iconColor="#53DB68" />
        </Flex>
      </Flex>
    </>
  );
};

export default TeamChoice;
