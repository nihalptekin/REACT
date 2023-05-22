import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);


const OrnekUseEffect = () => {
    const [sayac, setSayac]=useState(0)
//? ilk bunu göster

//! componentDidMount= component ilk render edildiignde calis bir daha calisma. Eger useEffect yazmasaydik setTimeout her render edildiginde caiscakti. 

// useEffect(()=>{

// setTimeout(()=>{
//     alert("veri getirildi")
// },3000)

// }, [])


//? ikinci olarak bunu göster

//! count her degistiginde calissin= componentDidUpdate  
//! koseli paramtezin cinde sayac yazdik. sayac her degistiginde sunu yap demek

// useEffect(()=>{
//     console.log("sayac artiyor");
// setTimeout(()=>{
// alert("veri getirildi")
// },3000)

// }, [sayac])

//? son oalra bunu göster
//! componenet öldugunde yani baska sayfaya gidildiginde = 

useEffect(() => {

   const time= setInterval(()=>{
        console.log("INTERVAL CALISMAYA BASLADI");

    }, 1000)
    
//! component ölünce= componentDidUnMount
return () => {
    clearInterval(time)
console.log("component öldü");}
}, [])

  return (

    <div>
        <h3>COUNT:{sayac}</h3>

        <button className='btn btn-warning' onClick={()=>setSayac(sayac+1)}>ARTTIR</button>
    </div>
  )
}

export default OrnekUseEffect