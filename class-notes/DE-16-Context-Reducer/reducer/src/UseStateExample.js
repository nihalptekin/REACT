import { useState } from "react";
import load from "./img/loading-loading-gif.gif";

const UseStateExample = () => {
 
  const [dogResim, setDogResim]=useState("")
  const [loading, setLoading] =useState(false)
  const [error, setError]=useState("")

  const fetchDog = () => {
 
      setLoading(true)
    fetch("https://dog.ceo/api/breeds/image/random")
 
      .then((res) => res.json())
      .then((data) => {
     setDogResim(data.message)
     setLoading(false)

      })
      .catch(() => {
        setError("DIKKAT URL'DE HATA VAR!!!")
        setLoading(false);
     
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
       onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {loading && <img src={load} alt=""/>}
      <img src={dogResim}/>
      {error && <h2>{error}</h2>}
  
    
    </div>
  );
};

export default UseStateExample;
