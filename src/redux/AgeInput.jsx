import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { age } from './userDetailsSlice';

const AgeInput = () => {
  const value = useSelector((state) => state.userDetails.age);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Age: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => dispatch(age(Number(e.target.value)))}
      />
    </div>
  );
};

export default AgeInput;
