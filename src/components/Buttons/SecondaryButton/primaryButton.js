import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const PrimaryButton = ({ text, route }) => {
  return (
    <>
      <Link href={route}>
        <Button
          fontSize=".8em"
          fontFamily="Poppins"
          bg="#53DB68"
          _hover={"none"}
          // px={{ base: "1.3em", md: "3em" }}
          // w={{ base: "6em", md: "12em" }}
          color="#FFFFFF"
          borderRadius="25px"
          border="none"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          {text}
        </Button>
      </Link>
    </>
  );
};

export default PrimaryButton;
