import React from 'react';
import './App.css';
import MyNavbar from './navbar/MyNavbar';
import GetStarted from "./get-started/GetStarted";
import About from "./about/About";

function App() {
  return (
      <div>
          <MyNavbar />
          <GetStarted />
          <About />
      </div>
  );
}

export default App;
