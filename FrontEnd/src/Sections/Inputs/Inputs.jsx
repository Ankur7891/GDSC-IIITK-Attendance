import React from 'react';
import styles from './Inputs.module.css';
import TextBox from '../../Components/TextBox/TextBox';

function Inputs() {
    const divertClient = () => {

    };
  return (
    <form id="gdsc-attendance" action="http://172.16.194.252:5000/register" method="post" onSubmit={divertClient}>
     <div className={styles.FormContent}>
      <TextBox
        name="Name"
        type="text"
        placeholder="Enter Your Name"
        isRequired="true"
      />
      <TextBox
        name="Roll"
        type="text"
        placeholder="Enter Your Roll Number"
        isRequired="true"
      />
      <TextBox
        name="Mobile"
        type="text"
        placeholder="Enter Your Mobile Number"
        isRequired="true"
      />
        <div className={styles.BtnContainer}>
      <button type="submit" className={styles.SubmitBtn}> Submit </button>
        </div>
      </div>
    </form>
  );
}

export default Inputs;
