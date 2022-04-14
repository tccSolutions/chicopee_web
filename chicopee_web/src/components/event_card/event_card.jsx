import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { rollIn, fadeInDownBig } from "react-animations";
import { fadeInLeft } from "react-animations";
import { fadeInRight } from "react-animations";

const EventCard = ({ count,timer, title, start_date, end_date, url, image_url }) => {
  
  const Animation_1 = keyframes`${fadeInLeft}`;
  const Animation_2 = keyframes`${fadeInDownBig}`; 
  const [animation, setAnimation]= useState()
  
  useEffect(()=>{
 
    setAnimation(()=>{
      if(count % 2 === 0 || count % 2 === 1){
        console.log('Animation_1')
        return Animation_1       
      }
      console.log('Animation_2')
      return Animation_2
    })
    
  },[])
    
 
  let AnimatedDiv = styled.div`
      animation: ${timer * 0.5}s ${animation};
    `;
  return (
    <div
      class="mb-2 border border-light shadow bg-dark text-light"
      style={{height: "15em" }}
    >
      <AnimatedDiv class="">
        <div className="mt-3">
          <img src={image_url} alt="..." style={{'maxWidth':'25rem'}} />
        </div>
        <div>
          <h5>{title}</h5>
          <h6>
            {start_date}-{end_date}
          </h6>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default EventCard;
