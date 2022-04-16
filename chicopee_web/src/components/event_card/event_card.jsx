import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDownBig } from "react-animations";
import { fadeIn} from "react-animations";

const EventCard = ({ count,timer, title, start_date, end_date, url, image_url }) => {
  
  const Animation_1 = keyframes`${fadeIn}`;
  const Animation_2 = keyframes`${fadeInDownBig}`; 
 
  
  
    
 
  let AnimatedDiv = styled.div`
      animation: ${timer + 5}s ${Animation_1};
    `;
  return (
    <div
      className=""
      style={{height: "10%" }}
    >
      <hr style={{'border':'none', 'borderTop':'dotted 15px black', 'backgroundColor':'white'}}/>
      <AnimatedDiv className="">
        <div className="">
          <img src={image_url} alt="..." className="rounded" style={{ 'maxHeight':'10rem', 'maxWidth':'100%'}} />
        </div>
        <div>
          <h5>{title}</h5>
          <h6>
            {start_date}-{end_date}
          </h6>
        </div>
        <a className='btn btn-secondary' href={url} target='_blank' rel="noreferrer">More Information</a>
      </AnimatedDiv>
    </div>
  );
};

export default EventCard;
