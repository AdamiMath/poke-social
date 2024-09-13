import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PHOT_GET } from '../../api';
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'



const Photo = () => {

  const {id} = useParams();
  const {data,loading,error,request} = useFetch();

  useEffect(()=>{
    const {url, options} = PHOT_GET(id);
    request(url,options);
  },[id, request])

  if(error) return <Error />
  if(loading) return <Loading />
  if(data) return <section className='container mainContainer'><PhotoContent data={data} single={true}/></section>
  else return null
  
}

export default Photo