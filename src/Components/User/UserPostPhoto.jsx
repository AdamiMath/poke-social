import React from 'react'
import style from './UserPost.module.css'
import useForm from '../../Hooks/useForm'

import Input from '../Forms/Input'
import Buttons from '../Forms/Buttons'


const UserPostPhoto = () => {

  const nome = useForm();
  const peso = useForm();
  const idade = useForm();


  function handleSubmit(e){
    e.preventDefault();
  }

  function handleImgChange(){
    
  }

  return (
    <section className={`${style.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="photo" type="text" name="nome"/>
        <Input label="peso" type="text" name="peso"/>
        <Input label="Idade" type="text" name="idade"/>
        <input type="file" name="img" id="img" onChange={handleImgChange}/>
        <Buttons>Enviar</Buttons>

      </form>
    </section>
  )
}

export default UserPostPhoto