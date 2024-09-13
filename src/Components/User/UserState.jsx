import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { GET_STATS } from '../../api';
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
import UserStatsGraphs from '../User/UserStatsGraphs'

const UserState = () => {

  const{data, error, loading, request} = useFetch();

  useEffect(()=>{
    async function getData(){
      const {url,options} = GET_STATS
      await request(url,options)
    }
    getData();
  },[request]);

  if(loading) return <Loading />
  if(error) return <Error error={error}/>
  if(data)
  return <UserStatsGraphs data={data}/>
  else return null
}

export default UserState