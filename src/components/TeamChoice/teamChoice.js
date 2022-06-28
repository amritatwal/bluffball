import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import icons from "../../lib/icons";

const TeamChoice = ({ team, handleCheckbox }) => {
  const icon = icons.find((icon) => icon.club === team);
  return (
    <>
      <Flex
        alignItems="center"
        border={"solid 1px #e1e1e1"}
        borderRadius="25px"
        my="1.5em"
        px="1em"
        py=".2em"
        w={{ md: "40em" }}
      >
        {icon ? <Image mr=".5em" w="1.5em" h="1.5em" src={icon.src} /> : <></>}
        <Flex flexGrow={1}>
          <Text
            fontSize="1.4em"
            fontWeight="600"
            color="#494949"
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
