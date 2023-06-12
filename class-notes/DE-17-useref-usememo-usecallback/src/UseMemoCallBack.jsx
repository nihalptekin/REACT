import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Users from './components/Users'
import { useMemo } from 'react'
import { useCallback } from 'react'

const UseMemoCallBack = () => {

  const[kisiler, setKisiler]=useState([])
const [text, setText]=useState("")
const[bitmis, setBitmis]=useState("")


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setKisiler(res.data))
  },[])

  const filtreli= useMemo(()=>kisiler.filter((i)=>i.name.includes(bitmis)),[kisiler,bitmis])

  const ekle = useCallback(()=>{
    setKisiler([...kisiler, {id:kisiler.length+1, name:"osman"}], [kisiler])
  })

  //?kisiler dizisi degistigi zaman filtreliyi olsutur, bitmis halini usersa gönder elli kere render etme. demek icin useMemo kullandik. köseli parantez koymamiz lazim. 

  //! i.name==input.value yazmadik cünkü harf dahi yazsak eger o harf ismin icinde varsa o ismi cagirsin istiyorum. Bu yüzden i.text.includes(text) yazdik. 


  return (
    <div>
      <input type="search" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>setBitmis(text)}>SEARCH</button>
      <button onClick={ekle}>EKLE</button>
      {/* <Users kisiler={kisiler} /> */}
      <Users kisiler={filtreli} />
    </div>
  )
}

export default UseMemoCallBack