import React from "react";
import MyNavbar from "./component/MyNavbar";
//!bootstrabi importu insall ettik
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div >
    
    <MyNavbar/>

    <Footer/>

  
    </div>
  );
}

export default App;
