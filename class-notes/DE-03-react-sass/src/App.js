import React from "react";
// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_variable.scss"

import "./App.scss"
import Header from "./compenents/header/Header";
import Card from "./compenents/card/Card";
import dataa from "./data"

function App() {
  return (
    <div >
     <Header/>
     <Card datA={dataa}/>
    </div>
  );
}

export default App;
