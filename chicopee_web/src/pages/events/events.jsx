import React, {useState, useEffect} from "react";
import EventCard from "../../components/event_card/event_card";

const Events = () => {
    const [events, setEvents] = useState([])
    const fetchEvents = () => {
        fetch("https://chicopee-backend.herokuapp.com/api/all_events"
          )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
        setEvents(data);
        console.log(events)
      });
    };

    useEffect(()=>{
      fetchEvents()
  },[])


  return (
     <div class='mt-5'>
       <div>
         <h1>Scheduled Events</h1>
      </div>
      <div>
      {events.map(event=>(
         <EventCard 
         key={event.id} 
         timer={event.id} 
         title={event.title}
         url={event.url}
         image_url = {event.image_url}
         start_date={event.start_date}
         end_date={event.end_date}/>
       ))}
      </div>
       
     </div>
  );
}

export default Events;
