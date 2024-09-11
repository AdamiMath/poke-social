import React, { useEffect, useState } from 'react'
import style from './UserPost.module.css'
import useForm from '../../Hooks/useForm'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'



import Input from '../Forms/Input'
import Buttons from '../Forms/Buttons'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'


const UserPostPhoto = () => {

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const [img, setImage] = useState({});

  const {data, error, loading, request} = useFetch();

  const navigate = useNavigate();

  useEffect(()=>{
    if(data) navigate('./conta');
  },[data, navigate])


  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');

    const {url, options} = PHOTO_POST(formData, token)

    request(url, options);
 
  }

  function handleImgChange({target}){
    setImage({
      raw: target.files[0],
      preview: URL.createObjectURL(targe.files[0])

    });
  }

  return (
    <section className={`${style.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="photo" type="text" name="nome" {...nome}/>
        <Input label="peso" type="number" name="peso" {...peso}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <input className={style.file} type="file" name="img" id="img" onChange={handleImgChange}/>
        {loading ?  <Buttons disabled>Enviando...</Buttons> :  <Buttons>Enviar</Buttons>}
        <Error error={error} /> 

      </form>
      <div>
        {img.preview && <div className={style.preview} style={{backgroundImage: `url(${img.preview})`}}>
          </div>}
      </div>
    </section>
  )
}

export default UserPostPhoto