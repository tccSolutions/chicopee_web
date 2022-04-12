import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
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
          <Route path='/' element={<Homepage/>}/>
          <Route path='staff' element={<Staff/>}/>
          <Route path='events' element={<Events/>}/>
          <Route path='contact' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      
      
   
    </div>
  );
}

export default App;
