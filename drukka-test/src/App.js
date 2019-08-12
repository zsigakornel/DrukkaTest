import React from 'react';
import './App.css';
import MyNavbar from './navbar/MyNavbar';
import GetStarted from "./get-started/GetStarted";
import About from "./about/About";
import ForCustomers from "./for-customers/ForCustomers";
import Available from "./available/Available";

function App() {
  return (
      <div>
          <MyNavbar />
          <GetStarted />
          <About />
          <ForCustomers />
          <Available />
      </div>
  );
}

export default App;
