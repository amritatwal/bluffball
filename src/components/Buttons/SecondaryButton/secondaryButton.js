import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const SecondaryButton = ({ text, route }) => {
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
        textTransform="uppercase"
        w={{ base: "6em", md: "12em" }}
      >
        <Link href={route}>{text}</Link>
      </Button>
    </>
  );
};

export default SecondaryButton;
