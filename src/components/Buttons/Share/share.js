import React from "react";
import {
  Box,
  Flex,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

const Share = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Image
            cursor={"pointer"}
            width="1.8em"
            height="auto"
            src={"https://svgshare.com/i/iNL.svg"}
            alt="ellipsis"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content">
          <PopoverArrow />
          <PopoverBody>
            <Flex flexDirection="row">
              <Box px=".2em">
                <Image
                  w="2.5em"
                  src="https://img.icons8.com/color/48/undefined/facebook-new.png"
                />
              </Box>
              <Box px=".2em">
                <Image
                  w="2.5em"
                  src="https://img.icons8.com/color/48/undefined/whatsapp--v1.png"
                />
              </Box>
              <Box px=".2em">
                <Image
                  w="2.5em"
                  src="https://img.icons8.com/color/48/undefined/twitter--v1.png"
                />
              </Box>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Share;
