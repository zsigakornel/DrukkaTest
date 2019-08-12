import React from 'react';
import './App.css';
import MyNavbar from './navbar/MyNavbar';
import GetStarted from "./get-started/GetStarted";
import About from "./about/About";
import ForCustomers from "./for-customers/ForCustomers";
import Available from "./available/Available";
import ForHotels from "./for-hotels/ForHotels";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";



class App extends React.Component{
    render(){
        return (
            <div>
                <MyNavbar />
                <GetStarted />
                <About />
                <ForCustomers />
                <Available />
                <ForHotels />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;
