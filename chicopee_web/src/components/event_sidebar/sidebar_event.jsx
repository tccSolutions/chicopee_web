import React from "react";

export default function SidebarEvent(props) {
    
   
  return (
   
      <a
        href={props.url}
        target="_blank"
        class="btn btn-dark w-100 mb-3 shadow"
        style={{ height: "9.5em" }}
      >
        <img
          src={props.img}
          alt=""
          className="w-75"
          style={{ maxHeight: "35%" }}
        />
        <h5>{props.title}</h5>
        <h6>{props.start_date} - {props.end_date}</h6>
      </a>
   
  );
}
