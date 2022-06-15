import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
          <Component {...pageProps} theme={theme} />
        </ChakraProvider>
      </UserProvider>
    </div>
  );
}

export default App;
