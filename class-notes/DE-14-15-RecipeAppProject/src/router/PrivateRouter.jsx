import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  return (

    //! Login'de yazdigimiz localstoraca.setItem ile username ve passworud burada getirdik. ve bir turnary yaptik. Eger bu ikisi dogru ise loginden cikis yap dedik. Bunu da Outlet componenti ile yaptik. Outlet cikis yapmayi saglayan bir react componentidir. Eger sifre dogru degilse o zaman Navigate to ile loginde kal anlaminda yazdik. Navigate de buraya özel bir componentttir diger navigate ile karistirmamak lazim. 
   (localStorage.getItem("username")==="ipek" &&  
   localStorage.getItem("password")==="1234") ? (<Outlet/>) : (<Navigate to="/"/>)
   
   )
  
}

export default PrivateRouter