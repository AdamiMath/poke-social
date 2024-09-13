import React from 'react'
import Input from '../Forms/Input'
import Buttons from '../Forms/Buttons'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../Helper/Error'



function LoginPasswordLost() {

  const login = useForm();
  const {data,loading,error,request} = useFetch();

  async function handleSubmit(e){
    e.preventDefault();
    if(login.validate()){
    const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar')})
    const {jason} = await request(url, options)
    }
  }

  return (
    <section>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : 
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type='text' name='login'{...login}/>
        {loading ? <Buttons>Enviando...</Buttons> : <Buttons>Enviar</Buttons>  }
        
      </form>
      }
      <Error error={error}/>
    </section>
  )
}

export default LoginPasswordLost
