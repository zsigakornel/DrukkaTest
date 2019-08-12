import React from 'react';
import './App.css';
import MyNavbar from './navbar/MyNavbar';
import GetStarted from "./get-started/GetStarted";
import About from "./about/About";
import ForCustomers from "./for-customers/ForCustomers";

function App() {
  return (
      <div>
          <MyNavbar />
          <GetStarted />
          <About />
          <ForCustomers />
      </div>
  );
}

export default App;
