import React from "react";
import styled, { keyframes } from "styled-components";
import { rollIn, fadeInDownBig } from "react-animations";

const EventCard = ({ timer, title, start_date, end_date, url, image_url }) => {
  const Animation_1 = keyframes`${rollIn}`;
  const Animation_2 = keyframes`${fadeInDownBig}`;
  const chosenAnimation = Animation_1;
  let AnimatedDiv = styled.div`
    animation: ${timer *.5}s ${chosenAnimation};
  `;
  return (
    <AnimatedDiv class="mb-5 shadow text-light" style={{'width':'', 'height':'15em'}}>
     <a class='btn bg-dark text-light' href={url} target="_blank">
     <div>
      <img src={image_url} alt='...'/>
     </div>
       <div >
         <h5>{title}</h5>
         <h6>{start_date}-{end_date}</h6>
       </div>
     </a>
    </AnimatedDiv>
  );
};

export default EventCard;
