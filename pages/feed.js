import React, { useState, useEffect } from "react";
import config from "../config";
import PhraseCard from "../src/components/Cards/PhraseCard/PhraseCard";
import { Text, Flex, Box, Spacer } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Feed = () => {
  const [phrases, setPhrases] = useState([]);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <PhraseCard
      key={phrases[0].phrase_id}
      quote={phrases[0].phrase_desc}
      club={phrases[0].phrase_club}
    />,
    <PhraseCard
      key={phrases[1].phrase_id}
      quote={phrases[1].phrase_desc}
      club={phrases[1].phrase_club}
    />,
    <PhraseCard
      key={phrases[1].phrase_id}
      quote={phrases[1].phrase_desc}
      club={phrases[1].phrase_club}
    />,
  ];

  useEffect(() => {
    async function getPhrases() {
      const response = await fetch(`${config.API_URL}/phrases`);
      const data = await response.json();
      setPhrases(data.payload);
      console.log(phrases);
    }
    getPhrases();
  }, []);

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};

export default Feed;

// <>
/* {phrases.length > 1 ? (
        phrases.map((phrase) => {
          return (
            <PhraseCard key={phrase.phrase_id} quote={phrase.phrase_desc} />
          );
        })
      ) : (
        <></>
      )} */
/* {phrases.length > 1 ? (
        <PhraseCard
          key={phrases[0].phrase_id}
          quote={phrases[0].phrase_desc}
          club={phrases[0].phrase_club}
        />
      ) : (
        <></>
      )}
    </> */
