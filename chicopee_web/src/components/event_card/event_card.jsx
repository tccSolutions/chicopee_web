import React from "react";
import styled, { keyframes } from "styled-components";
import { rollIn, fadeInDownBig } from "react-animations";

const EventCard = ({ timer, title, start_date, end_date, url, image_url }) => {
  const Animation_1 = keyframes`${rollIn}`;
  const Animation_2 = keyframes`${fadeInDownBig}`;
  const chosenAnimation = Animation_2;
  let AnimatedDiv = styled.div`
    animation: ${timer}s ${chosenAnimation};
  `;
  return (
    <AnimatedDiv class="mb-5">
      <a
        class="btn bg-dark mb-3 p-3 pt-0 text-light w-75 rounded shadow"
        style={{ height: "14em" }}
        href={url} target="_blank"
      >
        <div class="btn">
          <img src={image_url} alt="..." style={{ maxHeight: "30%" }} />          
        </div>
        <h4>{title}</h4>
          <h6>
            {start_date} - {end_date}
          </h6>
      </a>
    </AnimatedDiv>
  );
};

export default EventCard;
