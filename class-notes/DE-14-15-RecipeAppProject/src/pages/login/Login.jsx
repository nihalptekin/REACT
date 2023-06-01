import React, { useState } from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import mealSvg from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate=useNavigate()
  const handleSubmit=(e)=>{
e.preventDefault()
navigate("/home")
  }


  return (
    <LoginContainer>
<FormContainer onSubmit={handleSubmit} >
<StyledImg src={mealSvg}/>
<Header>
  {"<Clarusway/>"}Recipe
</Header>

<StyledForm>

<StyledInput type="text"
  placeholder="username"
  required

  
/>

<StyledInput type="password"
  placeholder="password"
  required

/>

<StyledButton type="submit">Login</StyledButton>



</StyledForm>




</FormContainer>



    </LoginContainer>
  )
}

export default Login