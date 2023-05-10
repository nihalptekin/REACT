// rafce: reactArrowfonktionExportComponent
 // rfce: burada da const yerine fonktion yazar 


//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import Clock from '../clock/Clock'
import resim from '../img/ucak.jpeg'


//! External css
import "./Msg.css"


const Msg = () => {
//! internal css
const styleA={
  color:"green",
  fontFamily:"Tahoma",
  border:"1px solid red"
}

//! JAVASCRIPT ALANI ifler forlar buraya
  return (
    <div>
    
    <h2 style={styleA}> burasi MSG alani</h2>
    <Clock/>

    <p style={{color:"red", fontSize:"30px"}}>Hosgeldin REACT</p>
    
    <img className='msg-img' src="https://cdn.pixabay.com/photo/2018/01/18/20/56/auto-3091234__480.jpg" alt=''/> 
    <img className="msg-img" src={resim} alt=''/>
 
    </div>
  )
}

export default Msg