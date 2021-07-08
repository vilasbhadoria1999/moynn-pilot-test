import React, { useState } from 'react';
import {Redirect,Switch} from 'react-router-dom';
import FormSignup from  "./FormSignupInf"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <switch>
            <Redirect from="./Information" to="./Carrer"></Redirect>
          </switch>
        
        )}

        


    </>
  );
};

export default Form;