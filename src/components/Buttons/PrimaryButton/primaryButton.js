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
          bg="#E5FFE9"
          _hover={"none"}
          color="#53DB68"
          borderRadius="12px"
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
