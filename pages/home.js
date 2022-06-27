import { Flex } from "@chakra-ui/react";
import Fixture from "../src/components/Cards/fixtureCard";

export default function Home({ fixtures }) {
  console.log(fixtures);
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h={"calc(100vh - 8em)"}
        flexDirection={{ base: "column", md: "row" }}
      >
        {fixtures.map((fixture) => {
            return <Fixture date={fixture.fixture} />;
        })}
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
    const fixtures = data.response.slice(0, 3);
    return {
      props: {
        fixtures,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
