import React from 'react';
import styles from './Inputs.module.css';
import TextBox from '../../Components/TextBox/TextBox';
import tick from '../../Assets/Images/tick.svg';
import { useState } from 'react';

function Inputs() {
  
    const serverIP = '192.168.137.1';
    const routePath = `http://${serverIP}:5000/register`;

    const [ status, setStatus ] = useState(1);
    const submissionHandler = () => {
      setStatus(1);
    };

  return (
    <>
      <form
        id="gdsc-attendance"
        action={routePath}
        method="post"
        onSubmit={submissionHandler}
      >
          <div className={status === 0 ? styles.FormContent : styles.Hider}>
            <TextBox
              show="Name"
              name="Name"
              type="text"
              placeholder="Enter Your Name"
              isRequired={true}
            />
            <TextBox
              show="Roll No."
              name="Roll"
              type="text"
              placeholder="Enter Your Roll Number"
              isRequired={true}
            />
            <TextBox
              show="College Email ID"
              name="Email"
              type="text"
              placeholder="Enter Your College Email ID"
              isRequired={true}
            />
            <div className={styles.BtnContainer}>
              <button type="submit" className={styles.SubmitBtn}>
                Submit
              </button>
            </div>
          </div> 
          <div className={styles.TickWrapper}>
            <img src={tick} alt="" className={styles.Tick} />
          </div>
      </form>
    </>
  );
}

export default Inputs;
