import React from "react";
import { Heading } from "@chakra-ui/react";

const Header = ({ fontSize, text, fontWeight, colour }) => {
  return (
    <div>
      <Heading
        fontFamily="Poppins"
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={colour}
        letterSpacing="1.5px"
      >
        {text}
      </Heading>
    </div>
  );
};

export default Header;
