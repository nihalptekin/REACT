//rafce

import Msg from "./Msg";

const Person = (props) => {
    //!JAVASCRIPT ALANI oldugu icin console log buraya yazildi. 
    console.log(props); //{name:"osman kara", img:"....."}
    //! destricture
    const{name, img, tel}=props

    
  return (
    <div>
    <h2>{name}</h2>
    <Msg isim={name} telefon={tel}/>

    <img src={img}/>
    <h4>{tel}</h4>
    </div>
  )
}

export default Person