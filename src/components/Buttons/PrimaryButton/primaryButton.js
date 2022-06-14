import React from "react";
import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ text }) => {
  return (
    <>
      <Button
        fontFamily="Poppins"
        bg="#53DB68"
        color="#FFFFFF"
        borderRadius="12px"
        border="none"
        letterSpacing="1px"
        size={"sm"}
        textTransform="uppercase"
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
