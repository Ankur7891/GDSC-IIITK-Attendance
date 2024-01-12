import React from 'react';
import styles from './Footer.module.css';
import footer from '../../Assets/Images/Footer-Contd.svg';

function Footer() {
  return (
    <div className={styles.Wrapper}>
      <img src={footer} alt="" className={styles.FooterImg} />
    </div>
  );
}

export default Footer;