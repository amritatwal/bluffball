import React from "react";
import { Button } from "@chakra-ui/react";

const SecondaryButton = ({ text, size }) => {
  return (
    <>
      <Button
        fontFamily="Poppins"
        bg="none"
        border="2px"
        borderColor="#53DB68"
        color="#333232"
        borderRadius="25px"
        letterSpacing="1px"
        size={size}
        textTransform="uppercase"
      >
        {text}
      </Button>
    </>
  );
};

export default SecondaryButton;
