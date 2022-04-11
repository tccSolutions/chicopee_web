import React, { Component, useState } from "react";
import SidebarEvent from "./sidebar_event";
import styled, {keyframes} from 'styled-components'
import { tada, rollIn, swing, wobble, slideOutUp, slideInLeft, rotateInDownLeft, fadeInDownBig } from "react-animations";



class EventSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          name: "Southeastern Championship Bullriding",
          dates: "April 22-23, 2022",
          img: "https://tccsolutions.github.io/chicopee_web/images/bullriding.jpg",
        },
        {
          name: "American Super Camp",
          dates: "April 29-30, 2022",
          img: "https://www.americansupercamp.com/images/american-supercamp-logo.png",
        },
        {
          name: "Mellow Yellow Llama Show",
          dates: "April 29-30, 2022",
          img: "https://img1.wsimg.com/isteam/ip/a472b8ed-4768-4d43-9a76-3b62a12bfd91/logo/8f1c3ab7-fd59-4ffe-ba80-c7ae3c2615d3.jpg/:/rs=h:79,cg:true,m/qt=q:100/ll",
        },
      ],
    };
  }



  render() {
    let count =4
    const Animation_1 = keyframes`${rollIn}`;
    const Animation_2 = keyframes`${fadeInDownBig}`    
    const chosenAnimation = Animation_2
    let AnimatedDiv = styled.div`animation: ${count}s ${chosenAnimation};`;
    return (
      <section className="p-3">
        <h4>Featured This Month</h4>
        <hr/>
        {this.state.events.map((event, index) => {
            count-=.5;
            AnimatedDiv = styled.div`animation: ${count}s ${chosenAnimation};`;
            console.log(count)
            return(
            <AnimatedDiv>
                <SidebarEvent key={event.name} title={event.name} date={event.dates} img={event.img}/>
            </AnimatedDiv>
          
            );
        })}
      </section>
    );
  }
}

export default EventSidebar;
