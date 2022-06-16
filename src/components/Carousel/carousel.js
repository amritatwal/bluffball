import React, { useState, useEffect } from "react";
import PhraseCard from "../Cards/PhraseCard/PhraseCard";
import { Text, Flex, Box, Spacer } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ phrases }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = phrases.map((phrase) => (
    <PhraseCard
      key={phrase.phrase_id}
      quote={phrase.phrase_desc}
      club={phrase.phrase_club}
    />
  ));

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <span style={{ opacity: isDisabled ? "0.5" : 1 }}>
        <Box className="b-refs-buttons" mt="2em">
          <button>
            <img
              width="50em"
              height="auto"
              src={"https://svgshare.com/i/iM7.svg"}
              alt="previous"
            />
          </button>
        </Box>
      </span>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <span style={{ opacity: isDisabled ? "0.5" : 1 }}>
        <Box className="b-refs-buttons" mt="2em">
          <button>
            <img
              width="50em"
              height="auto"
              src={"https://svgshare.com/i/iNM.svg"}
              alt="previous"
            />
          </button>
        </Box>
      </span>
    );
  };

  return (
    <Box h="100%" display="flex" mt="-5em">
      {phrases.length > 1 ? (
        <AliceCarousel
          border={"solid 1px blue"}
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Carousel;
