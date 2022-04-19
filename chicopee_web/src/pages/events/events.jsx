import React, { useState, useEffect } from "react";
import EventCard from "../../components/event_card/event_card";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchEvents = () => {
    fetch("https://chicopee-backend.herokuapp.com/api/all_events")
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

  let count = 0;
  return (
    <>
    {loading === false ? (
    <div className="mt-5 container-fluid ">
      <div>
        <h1>Scheduled Events</h1>
      </div>
      <div className="row  justify-content-center">
        {events.map((event) => {
          count += 1;
          return (
            <div key={event.id}className="col-md-8 rounded justify-content-center ">
              <EventCard               
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
    ):(
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h3>Please Wait</h3>
        <img src="https://img1.picmix.com/output/stamp/thumb/4/3/5/0/270534_fc964.gif"/>
        <h4>Gathering Events...</h4>
      </div>
    )}
    </>
  );
};

export default Events;
