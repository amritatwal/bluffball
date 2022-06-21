import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const SecondaryButton = ({ text, size, route }) => {
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
      >ƒ
        <Link href={route}>{text}</Link>
      </Button>
    </>
  );
};

export default SecondaryButton;
