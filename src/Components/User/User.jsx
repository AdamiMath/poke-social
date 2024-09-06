import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPostPhoto from './UserPostPhoto'
import UserState from './UserState'


const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />}></Route>
        <Route path='postar' element={<UserPostPhoto />}></Route>
        <Route path='estatistica' element={<UserState />}></Route>


      </Routes>
    </section>
  )
}

export default User