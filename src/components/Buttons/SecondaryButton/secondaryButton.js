import React from "react";
import { Button } from "@chakra-ui/react";

const SecondaryButton = ({ text }) => {
  return (
    <>
      <Button
        fontFamily="Poppins"
        bg="none"
        border={"solid 1px #53DB68"}
        borderRadius="12px"
        letterSpacing="1px"
        size={"sm"}
        textTransform="uppercase"
      >
        {text}
      </Button>
    </>
  );
};

export default SecondaryButton;
