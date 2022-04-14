import React, { useState, useEffect } from "react";
import EventCard from "../../components/event_card/event_card";

const Events = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = () => {
    fetch("https://chicopee-backend.herokuapp.com/api/all_events")
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

  let count = 0;
  return (
    <div className="mt-5 container-fluid ">
      <div>
        <h1>Scheduled Events</h1>
      </div>
      <div className="row  justify-content-center">
        {events.map((event) => {
          count += 1;
          return (
            <div className="col-md-8 rounded justify-content-center">
              <EventCard
                key={event.id}
                count={count}
                timer={(count += 1)}
                title={event.title}
                url={event.url}
                image_url={event.image_url}
                start_date={event.start_date}
                end_date={event.end_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
