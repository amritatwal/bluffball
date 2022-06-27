import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "../src/components/Navigation/Navbar";
import theme from "../customTheme";
import "@fontsource/poppins";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ pageProps, Component }) {
  return (
    <div className="container">
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Box
            my={{ base: ".5em", md: "3em" }}
            mx={{ base: "1em", md: "20em" }}
          >
            <Component {...pageProps} theme={theme} />
          </Box>
        </ChakraProvider>
      </UserProvider>
    </div>
  );
}

export default App;
