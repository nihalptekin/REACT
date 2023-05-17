import Container from "react-bootstrap/esm/Container"; 
import Image from "react-bootstrap/esm/Container";
import nbaLogo from "../assets/nba-logo.png";

const Header =()=> {
    return(
        <Container> 
        
        <img src={nbaLogo} width="200px"></img>
        <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
         
        </Container>
       
    )
}

export default Header