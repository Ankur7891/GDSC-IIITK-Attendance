import React, { useState, useEffect } from 'react';
import styles from './Inputs.module.css';
import tick from '../../Assets/Images/tick.svg';

function Inputs() {
  const serverIP = '192.168.137.1';
  const routePath = `http://${serverIP}:5000/register`;

  const [name, setName] = useState('');
  const [rollno, setRollNo] = useState('');
  const [email, setEmail] = useState('');

  const commonRegex = {
    Name: new RegExp('^([A-za-z. ])+$'),
    Roll: new RegExp('^20[0-9]{2}[A-Za-z]{3}[0-9]{4}$'),
    Email: new RegExp(
      '^[A-za-z]+[0-9]{2}[A-Za-z]{3}[0-9]{1,3}@iiitkottayam.ac.in$'
    ),
  };

  const [valid, setValid] = useState(0);
  const handleValidation = () => {
    setName(name);
    setRollNo(rollno.trim().replace(' ', '').toUpperCase());
    setEmail(email.trim().replace(' ', ''));
    if (!commonRegex.Name.test(name)) {
      setValid(0);
      return;
    } else {
      setValid(1);
    }
    if (!commonRegex.Roll.test(rollno)) {
      setValid(0);
      return;
    } else {
      setValid(1);
    }
    if (!commonRegex.Email.test(email)) {
      setValid(0);
      return;
    } else {
      setValid(1);
    }
  };

  const [status, setStatus] = useState(0);
  const submissionHandler = () => {
    handleValidation();
    setStatus(1);
  };

  useEffect(() => {
    handleValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, rollno, email]);

  return (
    <>
      <form
        id="gdsc-attendance"
        action={routePath}
        method="post"
        onSubmit={submissionHandler}
      >
        <div className={status === 0 ? styles.FormContent : styles.Hider}>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="Name">
              Name
            </label>
            <div className={styles.InputContainer}>
              <input
                id="Name"
                name="Name"
                className={styles.Input}
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoComplete="on"
              />
            </div>
          </div>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="Roll">
              Roll No.
            </label>
            <div className={styles.InputContainer}>
              <input
                id="Roll"
                name="Roll"
                className={styles.Input}
                type="text"
                placeholder="Enter Your Roll Number"
                value={rollno}
                onChange={(e) => {
                  setRollNo(e.target.value);
                }}
                autoComplete="on"
              />
            </div>
          </div>
          <div className={styles.InputWrapper}>
            <label className={styles.Label} htmlFor="Email">
              College Email ID
            </label>
            <div className={styles.InputContainer}>
              <input
                id="Email"
                name="Email"
                className={styles.Input}
                type="text"
                placeholder="Enter Your College Email ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="on"
              />
            </div>
          </div>
          <div className={styles.BtnContainer}>
            <button
              type="submit"
              disabled={valid === 0 ? true : false}
              className={styles.SubmitBtn}
            >
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
