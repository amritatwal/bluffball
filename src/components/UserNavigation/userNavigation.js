import React from "react";
import {
  Text,
  Button,
  Box,
  Flex,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  MenuDivider,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import UserIcon from "../UserIcon/userIcon";

const UserNavigation = () => {
  const { user } = useUser();

  return (
    <Flex>
      {!user ? (
        <Flex display="flex" flexDirection="row" alignItems="center">
          <Box mr="1em">
            <Text
              color="#403f3f"
              fontSize=".8em"
              fontWeight="600"
              my="1em"
              textTransform="uppercase"
            >
              Have an account?
            </Text>
          </Box>
          <Box>
            <Link href={"/api/auth/login"} textDecoration="none">
              <Button
                fontSize=".8em"
                bg="none"
                _hover={"none"}
                _active={"none"}
                color="#403f3f"
                borderRadius="25px"
                border={"solid 2px #53DB68"}
                letterSpacing="1px"
                textTransform="uppercase"
              >
                Sign in
              </Button>
            </Link>
          </Box>
        </Flex>
      ) : (
        <Menu>
          <MenuButton aria-label="Options">
            <Flex alignItems="center" display="flex" flexDirection="row">
              <Box mx="1em">
                {user.picture ? (
                  <UserIcon src={user.picture} alt={user.name} />
                ) : (
                  <UserIcon
                    src={"https://i.ibb.co/xMpZVyP/Surface-Pro-8-1.png"}
                    alt={user.name}
                  />
                )}
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem
              color="#B0B0B0"
              fontSize={".8em"}
              fontWeight="700"
              letterSpacing=".4px"
            >
              <Link href={"/home"} textDecoration="none">
                Home
              </Link>
            </MenuItem>
            <MenuItem
              color="#B0B0B0"
              fontSize={".8em"}
              fontWeight="700"
              letterSpacing=".4px"
            >
              Profile
            </MenuItem>
            <MenuItem
              color="#B0B0B0"
              fontSize={".8em"}
              fontWeight="700"
              letterSpacing=".4px"
            >
              User Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem
              color="#B0B0B0"
              fontSize={".8em"}
              fontWeight="400"
              letterSpacing=".4px"
            >
              <Link href={"/api/auth/logout"} textDecoration="none">
                Sign out
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default UserNavigation;
