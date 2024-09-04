import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Buttons from '../Forms/Buttons'
import useForm from '../../Hooks/useForm'

import { UserContext } from '../../UserContext'

const LoginForm = () => {

  const username = useForm();
  const password = useForm();

  const {userLogin} = useContext(UserContext);

 async function handleSubmit(e){
    e.preventDefault();
    if(username.validate() && password.validate()){

      userLogin(username.value, password.value);
  }
}


  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>       
        <Buttons>Entrar</Buttons>

      </form>
     <Link to="/login/criar">Criar Login</Link>
    </section>
  )
}

export default LoginForm
