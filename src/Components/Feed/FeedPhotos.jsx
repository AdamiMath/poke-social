import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import style from './FeedPhotos.module.css'

const FeedPhotos = ({page, user, setModalPhoto, setInfinite}) => {
  const {data,loading,error,request} = useFetch();
  useEffect(()=>{
    async function FetchPhotos() {
      const total = 3
      const {url, options} = PHOTOS_GET({page, total, user});
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false)
      request(url,options);
    }
    FetchPhotos();
  },[request,user,page]);
  
  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
  return (
    <ul className={`${style.feed} animeLeft`}>
     {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
     
    </ul>
  );
  else return null
};

export default FeedPhotos