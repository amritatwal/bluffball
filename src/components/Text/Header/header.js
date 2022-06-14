import React from "react";
import { Heading } from "@chakra-ui/react";

const Header = ({ fontSize, text, fontWeight}) => {
  return (
    <div>
      <Heading fontFamily="Poppins" fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </Heading>
    </div>
  );
};

export default Header;
