import React from 'react';
import styles from './AttendancePage.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Main from '../Main/Main';

const AttendancePage = () => {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default AttendancePage;
