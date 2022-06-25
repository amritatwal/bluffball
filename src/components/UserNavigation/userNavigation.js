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
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const UserNavigation = () => {
  const { user } = useUser();
  console.log(user);
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
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            bg="none"
          />
          <MenuList>
            <MenuItem
              color="#403f3f"
              fontSize={".8em"}
              fontWeight="700"
              letterSpacing=".4px"
            >
              Profile
            </MenuItem>
            <MenuItem
              color="#403f3f"
              fontSize={".8em"}
              fontWeight="700"
              letterSpacing=".4px"
            >
              User Settings
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default UserNavigation;
