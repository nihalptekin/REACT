import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';


const TeacherDetails = () => {
const [kisi, setKisi]=useState({})

const navigate=useNavigate()

 const {id}=useParams()

 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => setKisi(data))
    .catch((err) => console.log(err));
}, [id]);

// useEffexte koseli parantez icini bos birakabiliriz burada. Cünkü zaten bu sayfaya kisi tiklaninca o kisnin id'si iel geliniyor. ve bu sayfa tekrar calisiyor. Ama syntax geregi id'ye bagli calistigi icin köseli icine id yazarak "id degistiginde calis" komutu verirsek herkes mutlu onblur. yapmazsak da hata yapmis olmayiz.
console.log(kisi);

  return (
    <Container className="text-center mt-4">
      <div>
        <h3> </h3>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt=""
          width="250px"
        />
        <h4>{kisi.username}</h4>
        <h5>{kisi.name}</h5>
        <h5>{kisi.phone}</h5>
        <h5>{kisi.website}</h5>
        <h5>{kisi.email}</h5>
        <div>

        
          <button className="btn btn-primary" onClick={()=>navigate(-1)} >
          {/* bir önceki sayfaya yönöendirdigimiz icin -1 yazdik. iki önceki sayfaya gitsin isteseydik-2 yazabilirdik */}
            GO BACK
          </button>
          <button className="btn btn-warning" onClick={()=>navigate("/")} >
            GO HOME
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TeacherDetails