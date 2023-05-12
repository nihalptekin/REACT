import React from "react";
import "./App.scss"
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";


function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Header/>
       <Main/>
    </div>
  );
}

export default App;
