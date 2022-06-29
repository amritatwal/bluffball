import { Flex, Box, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Fixture from "../src/components/Cards/FixtureCard/fixtureCard";
import LaunchModal from "../src/components/Modals/LaunchModal/launchModal";

export default function Home({ fixtures }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        alignItems={{ base: "center", md: "baseline" }}
        display="flex"
        h={"calc(100vh - 8em)"}
        flexDirection="column"
        w="100%"
        mt={{ base: "1em", md: "3em" }}
      >
        <LaunchModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Box alignItems="center" display="flex" flexDirection="row">
          <Text
            fontSize="1.2em"
            color="#494949"
            fontWeight="800"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            Upcoming Fixtures
          </Text>
          <Box ml={{ base: ".8em", md: "1.5em" }}>
            <Text
              color="#53DB68"
              fontSize={{ base: ".6em", md: ".8em" }}
              fontWeight="700"
              textTransform="uppercase"
            >
              View all
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          my="2em"
        >
          {fixtures.map((fixture) => {
            return (
              <Fixture
                date={fixture.fixture.date}
                venue={fixture.fixture.venue.name}
                city={fixture.fixture.venue.city}
                awayTeam={fixture.teams.away.name}
                homeTeam={fixture.teams.home.name}
                awayTeamLogo={fixture.teams.away.logo}
                homeTeamLogo={fixture.teams.home.logo}
              />
            );
          })}
        </Box>
      </Flex>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  try {
    const res = await fetch(
      "https://v3.football.api-sports.io/fixtures?season=2022&league=39",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "25a390ffc2c18776346b34b43a757422",
        },
      }
    );
    const data = await res.json();
    const fixtures = data.response.slice(0, 2);
    return {
      props: {
        fixtures,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
