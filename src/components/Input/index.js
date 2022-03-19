import './styles.css';

import { useState, useRef } from 'react';

const Input = (props) => {
  const {
    text,
    type,
  } = props;

  return (
    <div>
      <p className='label-input'>{text}</p>
      <input type={type} className='input-app' />
    </div>
  )
}

export default Input;
