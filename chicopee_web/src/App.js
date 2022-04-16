import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Staff from "./pages/staff/staff";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Events from "./pages/events/events";
import ContactPage from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter basemname={'/chicopee_web'}>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/chicopee_web" element={<Homepage />} />
          <Route path="chicopee_web/staff" element={<Staff />} />
          <Route path="chicopee_web/events" element={<Events />} />
          <Route path="chicopee_web/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
