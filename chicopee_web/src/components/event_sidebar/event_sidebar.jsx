import React, { useState, useEffect } from "react";
import SidebarEvent from "./sidebar_event";
import styled, { keyframes } from "styled-components";
import {
  tada,
  rollIn,
  swing,
  wobble,
  slideOutUp,
  slideInLeft,
  rotateInDownLeft,
  fadeInDownBig,
} from "react-animations";

const EventSidebar = () => {
  const [events, setEvents] = useState([]);
  let count = 4;
  const Animation_1 = keyframes`${rollIn}`;
  const Animation_2 = keyframes`${fadeInDownBig}`;
  const chosenAnimation = Animation_2;
  let AnimatedDiv = styled.div`
    animation: ${count}s ${chosenAnimation};
  `;

  const fetchEvents = () => {
    fetch("https://chicopee-backend.herokuapp.com/api/monthly_events")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className="p-3">
      <h4>Featured This Month</h4>
      <hr />
      {events.map((event, index) => {
        count -= 0.5;
        AnimatedDiv = styled.div`
          animation: ${count}s ${chosenAnimation};
        `;
        console.log(count);
        return (
          <AnimatedDiv key={index}>
            <SidebarEvent
              key={event.id}
              title={event.title}
              start_date={event.start_date}
              end_date = {event.end_date}
              url={event.url}
              img={event.image_url}
            />
          </AnimatedDiv>
        );
      })}
    </section>
  );
};

export default EventSidebar;
