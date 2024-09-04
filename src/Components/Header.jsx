import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Pokes from '../assets/homepoke.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {

  const {data} = useContext(UserContext);
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/"><Pokes /></Link>
        {data ? (<Link className={styles.login} to="/conta">{data.nome}</Link>) : 
        <Link className={styles.login} to="/login">Login / Criar</Link> }
       
      </nav>
    </div>
  )
}

export default Header