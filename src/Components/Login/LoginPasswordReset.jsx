import React, { useEffect, useState } from 'react'
import Input from '../Forms/Input'
import Buttons from '../Forms/Buttons'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'

function LoginPasswordReset() {


  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate()
  const [login, setLogin] = useState();
  const [key, setKey] = useState();

  useEffect(()=>{
    const param = new URLSearchParams(window.location.search);
    const key = param.get('key');
    const login = param.get('login');
    if(key) setKey (key);
    if(login) setLogin (login);

  },[]);

  async function handleSubmit(e){
    e.preventDefault();
    if(password.validate()){
    const {url, options} = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
   const {response} =  await request(url,options)
   if(response.ok) navigate('/login');
  }
  }

  return (
    <div>
   <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
      <Input label='Nova Senha' type='password' name='password' {...password}/>
      {loading ? <Buttons disabled>Resetando</Buttons> : <Buttons disabled>Resetar</Buttons>}
      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset
