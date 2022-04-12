import React from "react";
import EventSidebar from "../../components/event_sidebar/event_sidebar";
import styled, { keyframes } from "styled-components";
import { fadeIn, rollIn, rubberBand } from "react-animations";

export default function Homepage() {
  // Animationed Components
  const fadeInAnimation = keyframes`${fadeIn}`;
  const FadeDiv = styled.div`
    animation: 3s ${fadeInAnimation};
  `;

  // Render Page
  return (
    <section>
      <div className="container-fluid row justify-content-between m-0">
        <FadeDiv className="col-md-8">
          <div className="row justify-content-center">
            <img
              src="https://www.hallcounty.org/ImageRepository/Path?filePath=%2fdocuments%5cIntranet%5c20%2fagcenter1_201410271149598036.jpg"
              alt="..."
              className="mt-5"
              style={{'width':'35em'}}
            />
          </div>
          <div className="row justify-content-center">
            <h6 className=" lh-lg">
              Chicopee Woods Agricultural Center is managed by Hall County Parks
              and Leisure Services. The center is comprised of 66 acres, and
              offers 2 covered arenas, 2 open arenas, 4 barns, and an activity
              hall. It accommodates activities such as equestrian events,
              rodeos, animal expositions, archery competitions, company
              functions, festivals, quinceañeras and much much more.
            </h6>
          </div>
        </FadeDiv>
        {/* Side Bar */}
        <div className="col-md-3">
          <EventSidebar />
        </div>
      </div>
    </section>
  );
}
