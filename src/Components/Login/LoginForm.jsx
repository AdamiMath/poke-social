import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Buttons from '../Forms/Buttons'

const LoginForm = () => {

  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(response =>{
      console.log(response);
      return response.json()
    }).then((json) => {
      console.log(json)
    })
  }


  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username"/>
        <Input label="Senha" type="password" name="password"/>       
        <Buttons>Entrar</Buttons>

      </form>
     <Link to="/login/criar">Criar Login</Link>
    </section>
  )
}

export default LoginForm
