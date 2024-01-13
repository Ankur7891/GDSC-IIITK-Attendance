import React from 'react';
import styles from './TextBox.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const commonRegex = {
  Name: new RegExp('^([A-za-z. ])+$'),
  Roll: new RegExp('^20[0-9]{2}[A-Za-z]{2,4}[0-9]{4}$'),
  Email: new RegExp('^[A-za-z]+[0-9]{2}[A-Za-z]{2,4}[0-9]{1,4}@iiitkottayam.ac.in$'),
};

function TextBox(props) {
  const { show, name, type, placeholder, isRequired } = props;
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(0);

  const handleBlur = () => {
    if (status === 1) {
      switch (name) {
        case 'Name': {
          if (commonRegex.Name.test(value.trim()) === false) {
            alert('Please Enter a Valid Name.');
          }
          return;
        }
        case 'Roll': {
          if (commonRegex.Roll.test(value.trim().replace(' ','')) === false) {
            alert('Please Enter a Valid College Roll Number.');
          }
          return;
        }
        case 'Email': {
          if (commonRegex.Email.test(value.trim().replace(' ','')) === false) {
            alert('Please Enter a Valid College Email Address.');
          }
          return;
        }
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.Wrapper}>
      <label className={styles.Label} htmlFor={name}>
        {show}
      </label>
      <div className={styles.Container}>
        <input
          id={name}
          name={name}
          className={styles.Input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setStatus(1);
            setValue(e.target.value);
          }}
          onBlurCapture={handleBlur}
          autoComplete="on"
          required={isRequired}
        />
      </div>
    </div>
  );
}

TextBox.propTypes = {
  show: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
};

TextBox.defaultProps = {
  show: '',
  type: 'text',
  value: '',
  isRequired: false,
};

export default TextBox;
