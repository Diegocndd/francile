import './styles.css';

import { useState, useRef } from 'react';

const Input = (props) => {
  const {
    text,
    type,
    placeholder = '',
  } = props;

  return (
    <div>
      {text ? <p className='label-input'>{text}</p> : null}
      <input type={type} className='input-app' placeholder={placeholder} />
    </div>
  )
}

export default Input;
