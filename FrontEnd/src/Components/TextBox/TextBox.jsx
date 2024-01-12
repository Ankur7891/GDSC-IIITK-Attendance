import React from 'react';
import styles from './TextBox.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function TextBox(props) {
  const { name, type, placeholder, isRequired } = props;
  const [value, setValue] = useState('');
  return (
    <div className={styles.Wrapper}>
      <label className={styles.Label} htmlFor={name}>
        {name}
      </label>
      <div className={styles.Container}>
        <input
          id={name}
          className={styles.Input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete=""
          required={isRequired}
        />
      </div>
    </div>
  );
}

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
};

TextBox.defaultProps = {
  type: 'text',
  value: '',
  isRequired: false,
};

export default TextBox;
