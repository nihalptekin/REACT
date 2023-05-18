import React from "react";
import MyNavbar from "./component/MyNavbar";
//!bootstrabi importu insall ettik
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
import dataa from './data'
import CourseCard from "./component/CourseCard";


function App() {
  return (
    <div >
    
    <MyNavbar/>

    <CourseCard data={dataa}/>

    <Footer/>

  
    </div>
  );
}

export default App;
