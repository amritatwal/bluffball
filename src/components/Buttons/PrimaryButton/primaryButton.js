import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const PrimaryButton = ({ text, size, route }) => {
  return (
    <>
      <Link href={route}>
        <Button
          fontFamily="Poppins"
          bg="#53DB68"
          _hover={"none"}
          py="1em"
          px={{ base: "1.3em", md: "3em" }}
          size={size}
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
