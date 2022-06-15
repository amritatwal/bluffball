import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const PrimaryButton = ({ text, size, route }) => {
  return (
    <>
      <Button
        fontFamily="Poppins"
        bg="#53DB68"
        size={size}
        color="#FFFFFF"
        borderRadius="25px"
        border="none"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        <Link href={route}>{text}</Link>
      </Button>
    </>
  );
};

export default PrimaryButton;
