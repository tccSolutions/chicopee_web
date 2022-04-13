import React, {useState, useEffect} from "react";

const Events = () => {
    const [events, setEvents] = useState([])
    const fetchEvents = () => {
        fetch("https://chicopee-backend.herokuapp.com/api/all_events"
          )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
        console.log(data);
      });
    };

    useEffect(()=>{
      fetchEvents()
  },[])


  return (
     <h1>Events</h1>
  );
}

export default Events;
