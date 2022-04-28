import React from "react";

export default function SidebarEvent(props) {


  return (

    <a
      href={props.url}
      target="_blank"
      className="btn w-100"
      style={{ height: "25%" }}
    >
      <div style={{'maxHeight':'95%'}}>
        <img
          src={props.img}
          alt=""
          className=""
          style={{ maxHeight: "95%", 'maxWidth':'100%' }}
        />
        <h5>{props.title}</h5>
        <h6>{props.start_date} - {props.end_date}</h6>
      </div>


      <hr style={{ 'borderTop': '15px dotted black', 'backgroundColor': 'white' }} />
    </a>

  );
}
