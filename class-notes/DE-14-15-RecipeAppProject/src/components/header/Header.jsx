import React from 'react'
import {  HeaderContainer, Button, FoodInput, FormContainer, MainHeader, Select } from './HeaderStyles'

const Header = ({setQuery, setOgun, getData}) => {


  const yapSubmit=(e)=>{
e.preventDefault()
getData()
  }


  return (
    <HeaderContainer>
<MainHeader> FOOD APP</MainHeader>
<FormContainer onSubmit={(yapSubmit)}>
<FoodInput type= "text"placeholder='Search'

  onChange={(e)=>setQuery(e.target.value)}
/>
<Button type="submit">Search</Button>
<Select name="ogunTypes" id="ogunTypes"
onChange={(e)=>setOgun(e.target.value)}
>
<option>Breakfast</option>
<option>Lunch</option>
<option>TeaTime</option>
</Select> 



</FormContainer>

    </HeaderContainer>
  )
}

export default Header