import React, { useState } from "react";
import PhraseCard from "../Cards/PhraseCard/PhraseCard";
import { Box } from "@chakra-ui/react";
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

  // const onSlideChanged = (e) => {
  //   updateProgressBar(e.item);
  // };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <span style={{ opacity: isDisabled ? "0.3" : 1 }}>
        <Box className="b-refs-buttons" mt="2em" mx="2em">
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
      <span style={{ opacity: isDisabled ? "0.3" : 1 }}>
        <Box className="b-refs-buttons" mt="2em" mx="2em">
          <button>
            <img
              width="50em"
              height="auto"
              src={"https://svgshare.com/i/iNM.svg"}
              alt="next"
            />
          </button>
        </Box>
      </span>
    );
  };

  return (
    <Box h="100%" display="flex" mt="-15em">
      {phrases.length > 1 ? (
        <AliceCarousel
          mouseTracking
          infinite={false}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableSlideInfo={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          // onSlideChanged={onSlideChanged}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Carousel;
