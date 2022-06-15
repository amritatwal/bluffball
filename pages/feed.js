import React, { useState, useEffect } from "react";
import config from "../config";

const Feed = () => {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    async function getPhrases() {
      const response = await fetch(`${config.API_URL}/phrases`);
      const data = await response.json();
        setPhrases([phrases, ...data.payload])
        console.log(phrases)
    }
    getPhrases();
  }, []);

  return <></>;
};

export default Feed;
