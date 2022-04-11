import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
    </div>
  );
}

export default App;
