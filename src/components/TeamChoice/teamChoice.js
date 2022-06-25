import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

const TeamChoice = ({ team, handleCheckbox }) => {
  return (
    <>
      <Flex
        my="1.5em"
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
          {team !== "Arsenal" ? (
            <Checkbox
              size="lg"
              isDisabled
              color="#53DB68"
              onChange={() => handleCheckbox(team)}
            />
          ) : (
            <Checkbox
              size="lg"
              color="#53DB68"
              onChange={() => handleCheckbox(team)}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default TeamChoice;
