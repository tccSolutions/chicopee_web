import React from "react";

export default function SidebarEvent(props) {
    
   
  return (
   
      <a
        href={props.url}
        target="_blank"
        class="btn w-100 mb-3"
        style={{ height: "20em" }}
      >
        
        <img
          src={props.img}
          alt=""
          className="align-items-center"
          style={{ maxHeight: "15rem" }}
        />
        <h5>{props.title}</h5>
        <h6>{props.start_date} - {props.end_date}</h6>
        <hr style={{'borderTop': '15px dotted black', 'backgroundColor':'white'}}/>
      </a>
   
  );
}
