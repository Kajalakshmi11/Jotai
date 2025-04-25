import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { email } from './userDetailsSlice';

const EmailInput = () => {
  const value = useSelector((state) => state.userDetails.email);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Email: </label>
      <input
        type="email"
        value={value}
        onChange={(e) => dispatch(email(e.target.value))}
      />
    </div>
  );
};

export default EmailInput;
