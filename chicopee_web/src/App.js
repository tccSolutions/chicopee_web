import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Staff from "./pages/staff/staff";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Events from "./pages/events/events";
import ContactPage from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter basemname={`/chicopee_web`}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
