import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRefComponent = () => {

//? 1.kullanim tercih edilmeyen yol
//* hafizada yeri degismeyen bir obje olsuturur, her renderda yeniden render olmaz, onu engellemek icin sürekli yeni referans numarasi alarak hafizayi doldurmamak için.

// const[sayac, setSayac]=useState(0)

// const sayacRef=useRef(0)

// console.log("sayac", sayac); 
// console.log("sayacRef", sayacRef.current);
// const arttir=()=>{
// setSayac(sayac+1)
//   sayacRef.current++
// }
//? 2.kullanim DOM elemanlarina ulasmamizi saglar.
const inputRef=useRef()
const divRef=useRef()

const renkDegistir=()=>{
  divRef.current.style.backgroundColor=inputRef.current.value;

}

  return (
    <div ref={divRef}>
      <h2>UseRef Component </h2>
      {/* <h3>{sayacRef.current}</h3> */}
      <input ref={inputRef} type="text" placeholder="enter text..."/>
      <button onClick={renkDegistir}>ChangeRenk</button>
      {/* <button onClick={arttir}>ARTTIR</button> */}
    </div>
  )
}

export default UseRefComponent