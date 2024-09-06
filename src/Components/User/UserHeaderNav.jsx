import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import style from './UserHeader.module.css'
import Adicionar from '../../assets/adicionar.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import Feed from '../../assets/feed.svg?react';
import Sair from '../../assets/sair.svg?react';
import useMedia from '../../Hooks/useMedia';



const UserHeaderNav = () => {
 
    const {userLogout} = useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false)



    const navigate = useNavigate();
    
    function handleLogout(){
      userLogout();
      navigate('/login');
    }


  return (
    <>
    {mobileMenu && <button className={style.mobileButton} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>}
    <nav className={style.nav}>
        <NavLink to="/conta" end><Feed />{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to="/conta/estatistica"><Estatisticas /> {mobile && 'Estatísticas' }</NavLink>
        <NavLink to="/conta/postar"><Adicionar />{mobile && 'adicionar'}</NavLink>
        <button onClick={handleLogout}><Sair />{mobile && 'sair'}</button>


    </nav>
    </>
  )
}

export default UserHeaderNav