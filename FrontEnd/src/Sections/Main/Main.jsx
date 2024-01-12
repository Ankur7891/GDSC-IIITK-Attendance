import React from 'react';
import styles from './Main.module.css';
import mainlogo from '../../Assets/Images/gdsc-social.svg';
import Inputs from '../Inputs/Inputs';

function Main() {
  return (
    <div className={styles.Container}>
      <img src={mainlogo} alt="" className={styles.MainLogo} />
      <div className={styles.Frame}>
        <div className={styles.Atd}>
          <h1 className={styles.AtdTag}> Attendance </h1>
        </div>
        <Inputs />
      </div>
    </div>
  );
}

export default Main;
