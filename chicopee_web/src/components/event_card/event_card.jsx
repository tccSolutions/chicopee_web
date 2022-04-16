import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { rollIn, fadeInDownBig } from "react-animations";
import { fadeInLeft, fadeIn} from "react-animations";

const EventCard = ({ count,timer, title, start_date, end_date, url, image_url }) => {
  
  const Animation_1 = keyframes`${fadeIn}`;
  const Animation_2 = keyframes`${fadeInDownBig}`; 
  const [animation, setAnimation]= useState()
  
  
    
 
  let AnimatedDiv = styled.div`
      animation: ${timer + 5}s ${Animation_1};
    `;
  return (
    <div
      class=""
      style={{height: "20em" }}
    >
      <hr style={{'border':'none', 'borderTop':'dotted 15px black', 'backgroundColor':'white'}}/>
      <AnimatedDiv class="">
        <div className="">
          <img src={image_url} alt="..." className="rounded" style={{ 'height':'10rem'}} />
        </div>
        <div>
          <h5>{title}</h5>
          <h6>
            {start_date}-{end_date}
          </h6>
        </div>
        <a className='btn btn-secondary' href={url} target='_blank'>More Information</a>
      </AnimatedDiv>
    </div>
  );
};

export default EventCard;
