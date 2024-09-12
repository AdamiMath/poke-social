import React, { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import style from './FeedPhotos.module.css'

const FeedPhotos = () => {
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
