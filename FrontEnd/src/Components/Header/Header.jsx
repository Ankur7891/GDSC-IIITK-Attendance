import React from 'react';
import styles from './Header.module.css';
import header from '../../Assets/Images/Header-Contd.svg';

function Header() {
  return (
    <div className={styles.Wrapper}>
        <img src={header} alt="" className={styles.HeaderImg} />
    </div>
  )
}

export default Header;