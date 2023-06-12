
import { useContext } from "react";
import AnaUser from "./AnaUser";
import { KullaniciContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";
const Isimler = () => {
const{kullanici}=useContext(KullaniciContext)
  
 return (
   <div>
   {kullanici.slice(0, 4).map((i)=>
   <div style={{background:"pink"}}>
   
    {i.login}</div>)}

     <AnaUser kullanici={kullanici} />
   </div>
 );
}

export default Isimler


