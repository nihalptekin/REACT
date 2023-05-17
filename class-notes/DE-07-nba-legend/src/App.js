import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; 
import Container from "react-bootstrap/Container"
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container >
     <Header/>
     <CardContainer/>
    </Container>
  );
}

export default App;
