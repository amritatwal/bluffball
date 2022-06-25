import React from "react";
import { Image } from "@chakra-ui/react";

const UserIcon = ({ src, alt }) => {
  return (
    <>
      <Image borderRadius="50%" h="2em" src={src} w="2em" alt={alt} />
    </>
  );
};

export default UserIcon;
