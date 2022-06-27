import { Flex, Box, Text } from "@chakra-ui/react";
import Fixture from "../src/components/Cards/FixtureCard/fixtureCard";
import Header from "../src/components/Text/Header/header";

const someData = [
  {
    date: "2022-08-05T19:00:00+00:00",
    venue: "Selhurst Park",
    city: "London",
    awayTeam: "Chelsea",
    awayTeamLogo: "https://media.api-sports.io/football/teams/42.png",
    homeTeam: "Liverpool",
    homeTeamLogo: "https://media.api-sports.io/football/teams/42.png",
  },
  {
    date: "2022-08-05T19:00:00+00:00",
    venue: "Selhurst Park",
    city: "London",
    awayTeam: "Chelsea",
    awayTeamLogo: "https://media.api-sports.io/football/teams/42.png",
    homeTeam: "Liverpool",
    homeTeamLogo: "https://media.api-sports.io/football/teams/42.png",
  },
];

export default function Home({ fixtures }) {
  console.log(fixtures);
  return (
    <>
      <Flex
        display="flex"
        h={"calc(100vh - 8em)"}
        flexDirection="column"
        w="100%"
      >
        <Box alignItems="center" display="flex" flexDirection="row">
          <Text
            fontSize="1.2em"
            color="#4C4C4C"
            fontWeight="800"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            Upcoming Fixtures
          </Text>
          <Box ml={{ base: ".8em", md: "1.5em" }}>
            <Text
              color="#53DB68"
              fontSize={{ base: ".4em", md: ".8em" }}
              fontWeight="700"
              textTransform="uppercase"
            >
              View all
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" my="2em">
          {/* {someData.map((fixture) => {
            return (
              <Fixture
                date={fixture.date}
                venue={fixture.venue}
                city={fixture.city}
                awayTeam={fixture.awayTeam}
                homeTeam={fixture.homeTeam}
                awayTeamLogo={fixture.awayTeamLogo}
                homeTeamLogo={fixture.homeTeamLogo}
              />
            );
          })} */}
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
