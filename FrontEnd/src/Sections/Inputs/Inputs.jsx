import React from 'react';
import styles from './Inputs.module.css';
import TextBox from '../../Components/TextBox/TextBox';

function Inputs() {
    const exportData = () => {

    };
  return (
    <form id="gdsc-attendance" action="http://172.16.194.252:5000/register" method="post" onSubmit={exportData}>
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
      <button type="submit" className={styles.SubmitBtn}> Submit </button>
    </form>
  );
}

export default Inputs;
