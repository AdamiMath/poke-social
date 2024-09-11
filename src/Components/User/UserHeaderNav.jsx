import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import style from './UserHeader.module.css';
import Adicionar from '../../assets/adicionar.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import Feed from '../../assets/feed.svg?react';
import Sair from '../../assets/sair.svg?react';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          className={`${style.mobileButton} ${mobileMenu ? style.mobileButtonActive : ''}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <nav className={`${mobile ? style.navMobile : style.nav} ${mobileMenu && mobile ? style.navMobileActive : ''}`}>
        <NavLink to="/conta" end>
          <Feed />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatistica">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Adicionar'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
