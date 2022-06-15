import React, { useState, useEffect } from "react";
import config from "../config";
import PhraseCard from "../src/components/Cards/PhraseCard/PhraseCard";

const Feed = () => {
  const [phrases, setPhrases] = useState();

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
      {phrases ? (
        phrases.map((phrase) => {
          return <PhraseCard key={phrase.id} quote={phrase.desc} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Feed;
