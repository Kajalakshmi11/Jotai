import React from 'react';
import { useSelector } from 'react-redux';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import AgeInput from './AgeInput';

const Form = () => {
  

  return (
    <form>
      <NameInput />
      <EmailInput />
      <AgeInput />
      
    </form>
  );
};


export default Form;
