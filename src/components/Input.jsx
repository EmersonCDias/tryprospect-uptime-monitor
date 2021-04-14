import React from 'react';

const Input = ({ inputValue, handleOnChangeInputValue }) => (
  <input
    type="text"
    value={inputValue}
    onChange={({ target }) => handleOnChangeInputValue(target.value)}
  />
)

export default Input;
