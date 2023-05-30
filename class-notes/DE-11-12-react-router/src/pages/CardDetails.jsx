import React from "react";

import data from "../data";
import { useNavigate, useParams } from "react-router-dom";
const CardDetails = () => {
  const navigate = useNavigate();

  const { name } = useParams();
  return (
    <div className="container text-center mt-4">
      {data.map(
        (i) =>
          i.name === name && (
            <div>
              <h3>{i.name}</h3>
              <img src={i.img} alt="" />
              <h3>{i.text}</h3>
              <h4>{i.yorum}</h4>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(-1)}
                >
                  {/* bir önceki sayfaya yönöendirdigimiz icin -1 yazdik. iki önceki sayfaya gitsin isteseydik-2 yazabilirdik */}
                  GO BACK
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/")}
                >
                  GO HOME
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;
