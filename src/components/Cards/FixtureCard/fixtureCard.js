import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Fixture = ({
  date,
  venue,
  city,
  awayTeam,
  awayTeamLogo,
  homeTeam,
  homeTeamLogo,
}) => {
  // Format the date accordingly.
  const time = new Date(date).toLocaleString().slice(12, 17);
  const month = new Date(date).toString().slice(4, 7);
  const day = new Date(date).toString().slice(8, 11);
  return (
    <Box
      border={"solid 1px #EBEBEB"}
      borderRadius="12px"
      display="flex"
      flexDirection="row"
      color="#494949"
      h={{ base: "3em", sm: "7em", md: "10em" }}
      my={{ base: "1em", md: "0em" }}
      mr={{ base: ".5em", md: "1em" }}
      maxW={{ base: "25em", sm: "16em", md: "25em" }}
      w={{ base: "12em", sm: "16em", md: "23em" }}
    >
      <Box
        alignItems="center"
        borderRight={"solid 1px #EBEBEB"}
        display="flex"
        flexDirection="column"
        fontSize={{ base: "1em", md: "1.2em" }}
        fontWeight="800"
        justifyContent="center"
        my={{ base: ".2em", md: ".3em" }}
        px={{ base: ".7em" }}
        textTransform="uppercase"
        w={{ base: "8em", md: "8em" }}
      >
        <Text>
          {day}
          {month}
        </Text>
        <Text>{time}</Text>
      </Box>
      <Box display="flex" flexDirection="column" w="100%">
        <Box
          alignItems={"flex-start"}
          borderBottom={"solid 1px #EBEBEB"}
          display="flex"
          flexGrow="1"
          flexDirection="column"
          fontSize={{ base: ".8em", md: "1em" }}
          fontWeight="800"
          justifyContent="center"
          mx={{ base: "1em", md: "1.2em" }}
          px={{ base: ".5em", md: "1.3em" }}
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            my={{ base: ".5em", md: ".8em" }}
          >
            <Image
              alt="home team logo"
              h="1.1em"
              src={homeTeamLogo}
              w="1.1em"
            />
            <Text mx={{ base: ".4em", md: ".4em" }}>{homeTeam}</Text>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            my={{ base: ".5em", md: ".8em" }}
          >
            <Image
              alt="home team logo"
              h="1.1em"
              src={awayTeamLogo}
              w="1.1em"
            />
            <Text mx={{ base: ".4em", md: ".4em" }}>{awayTeam}</Text>
          </Box>
        </Box>
        <Box
          alignItems="center"
          color="#BCBCBC"
          fontSize={{ base: ".6em", md: ".8em" }}
          fontWeight="600"
          display="flex"
          justifyContent="center"
          py={{ base: ".8em", md: "1em" }}
          w="100%"
        >
          <Text>{`${venue}, ${city}`}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Fixture;
