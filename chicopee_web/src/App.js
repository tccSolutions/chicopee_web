import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Staff from "./pages/staff/staff";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/events/events";
import ContactPage from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
     
        <Routes>
          <Route exact path="chicopee_web" element={<Homepage />} />
          <Route path="chicopee_web/staff" element={<Staff />} />
          <Route path="chicopee_web/events" element={<Events />} />
          <Route path="chicopee_web/contact" element={<ContactPage />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
