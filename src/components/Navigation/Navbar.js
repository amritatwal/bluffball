import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import UserNavigation from "../UserNavigation/userNavigation";
import PrimaryButton from "../Buttons/PrimaryButton/primaryButton";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <nav>
      {isTabletOrMobile ? (
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          py=".8em"
          px=".5em"
          minHeight={"4em"}
          maxHeight={"8em"}
        >
          <Link href={"/"}>
            <Box cursor={"pointer"}>
              <Image
                src="https://i.ibb.co/41xBgR4/b.png"
                alt="bluffball"
                w={"2em"}
              />
            </Box>
          </Link>
        </Flex>
      ) : (
        <Flex
          flexDirection="row"
          alignItems="center"
          py=".8em"
          px=".5em"
          minHeight={"4em"}
          maxHeight={"8em"}
        >
          <Link href={"/"}>
            <Box cursor={"pointer"} display="flex" flexGrow="1" ml="1em">
              <Image
                src="https://i.ibb.co/wKxVnr2/68747470733a2f2f692e6962622e636f2f38384c543842362f626c75666662616c6c2e706e67.png"
                alt="bluffball"
                w={"12em"}
              />
            </Box>
          </Link>
          <Box alignItems="center" display="flex" px="1em">
            <UserNavigation />
            <PrimaryButton text={"CONTINUE LEARNING"} route={"/feed"} />
          </Box>
        </Flex>
      )}
    </nav>
  );
};

export default Navbar;
