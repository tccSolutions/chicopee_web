import React, { useState, useEffect } from "react";
import SidebarEvent from "./sidebar_event";
import styled, { keyframes } from "styled-components";
import {rollIn, fadeInDownBig} from "react-animations";

const EventSidebar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  let count = 4;
  const Animation_1 = keyframes`${rollIn}`;
  const Animation_2 = keyframes`${fadeInDownBig}`;
  const chosenAnimation = Animation_2;
 

  const fetchEvents = () => {
    fetch("https://chicopee-backend.herokuapp.com/api/monthly_events")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchEvents()
    
  }, []);

  return (
    <div className='mt-5'>
      <div>
        <h4>Happening This Month</h4>
        <hr/>
      </div>
    <>
    {loading === true ? (
      <div className='mt-5'>
      <h3>Please Wait</h3>
      <img src="https://pictures.dealer.com/c/covingtonfordfd/0870/6990b341e1a900977817d12e338ee455x.jpg?impolicy=resize&w=250"/>
      <h4>Gathering Events...</h4>
      </div>
    ):(
      <div>
        {events.map(event=>{
          count += -.5;
          let AnimatedDiv = styled.div`
          animation: ${count}s ${chosenAnimation};
        `;          
          return(
            <AnimatedDiv>
              <SidebarEvent
          title={event.title}
          img={event.image_url}
          start_date={event.start_date}
          end_date={event.end_date}
          url={event.url}
          />

            </AnimatedDiv>
          
          )
        })}
      </div>
    )}
    </>
    </div>
  );
};

export default EventSidebar;
