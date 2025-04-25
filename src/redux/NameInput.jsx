import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { name } from './userDetailsSlice';

const NameInput = () => {
  const value = useSelector((state) => state.userDetails.name);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(name(e.target.value))}
      />
    </div>
  );
};

export default NameInput;
