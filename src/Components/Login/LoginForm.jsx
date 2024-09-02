import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          <input type="text" 
          value={username}
          onChange={({target}) => setUsername(target.value)}    
          />
          <input type="text" 
          value={password}
          onChange={({target}) => setPassword(target.value)}    
          />
          <button>Entrar</button>
      </form>
     <Link to="/login/criar">Criar Login</Link>
    </section>
  )
}

export default LoginForm
