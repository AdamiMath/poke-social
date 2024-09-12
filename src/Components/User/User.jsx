import React, { useContext } from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPostPhoto from './UserPostPhoto'
import UserState from './UserState'
import { UserContext } from '../../UserContext'


const User = () => {

  const {data} = useContext(UserContext);

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}></Route>
        <Route path='postar' element={<UserPostPhoto />}></Route>
        <Route path='estatistica' element={<UserState />}></Route>


      </Routes>
    </section>
  )
}

export default User