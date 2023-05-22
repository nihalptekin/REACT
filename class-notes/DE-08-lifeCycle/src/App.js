import React from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import OrnekUseEffect from "./components/OrnekUseEffect";
import Clock from "./components/Clock";
import People from "./components/useEffect-fetch-axios/People";


function App() {
  const[goster, setGoster]=useState(true)
  return (
    <div className="container text-center mt-4" >
     {/* <LifeCycleMethods/> */}
     {/* <button className="btn btn-danger" onClick={()=>setGoster(!goster)}>GOSTER</button> */}


     {/* {goster ? <OrnekUseEffect/> : ""} */}
     {/* //* goster true ise ornekUseEffect sayfami göster degilse gösterme demek icin yukardaki if elseyi kurduk. bos tirnaklar falsy deger anlaminda.  */}
   {/* {goster && <OrnekUseEffect/>} */}

      {/* && iki parametrede doğruyken kullanılır, || soldaki doğruysa yada
      sağdaki doğruysa, hangisi true ise onu al */}

      {/* {goster && <Clock/>}  */}

      <People/>

    </div>
  );
}

export default App;
