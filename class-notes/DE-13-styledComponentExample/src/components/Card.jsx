import React from "react";
import data from "../data";
import ImageSSS from "./styles/ImageSSS";
import KardSSS from "./styles/KartSSS";

const Card = () => {
  return (
    <div >
      {data.map((item) => (
        <KardSSS key={item.id} ters={item.id%2 === 1 && "row-reverse"}>
          <div >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>

          <ImageSSS src={`./images/${item.image}`} alt="image"/>
        </KardSSS>
      ))}
    </div>
  );
};

export default Card;
