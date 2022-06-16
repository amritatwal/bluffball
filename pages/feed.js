import React, { useState, useEffect } from "react";
import config from "../config";
import PhraseCard from "../src/components/Cards/PhraseCard/PhraseCard";

const Feed = () => {
  const [phrases, setPhrases] = useState([]);

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
      {/* {phrases.length > 1 ? (
        phrases.map((phrase) => {
          return (
            <PhraseCard key={phrase.phrase_id} quote={phrase.phrase_desc} />
          );
        })
      ) : (
        <></>
      )} */}
      {phrases.length > 1 ? (
        <PhraseCard
          key={phrases[0].phrase_id}
          quote={phrases[0].phrase_desc}
          club={phrases[0].phrase_club}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Feed;
