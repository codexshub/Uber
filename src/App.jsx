import React from "react";
import Navbar from './Components/NAVBAR/Navbar';
import Home from './Components/HOME/Home';
import Footer from './Components/FOOTER/Footer';
import Secondpage from './Components/SECOND-PAGE/Secondpage';
import Thirdpage from './Components/THIRD-PAGE/Thirdpage';
import Forthpage from './Components/FORTH-PAGE/Forthpage';
import Fifthpage from './Components/FIFTH-PAGE/Fifthpage';
import Line from './Components/UNDER-LINE/Line';


function App() {
  return (
<>
    <Navbar/>
    <Home/>
    <Line/>
    <Secondpage/>
    <Thirdpage/>
    <Forthpage/>
    <Line/>
    <Fifthpage/>
    <Line/>
    <Footer/>
</>
  );
}

export default App;

