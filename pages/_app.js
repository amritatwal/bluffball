import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../src/components/Navigation/Navbar";
import theme from "../customTheme";
import "@fontsource/poppins";

function App({ pageProps, Component }) {
  return (
    <div className="container">
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} theme={theme} />
      </ChakraProvider>
    </div>
  );
}

export default App;
