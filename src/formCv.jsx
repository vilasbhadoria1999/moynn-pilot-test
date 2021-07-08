import React, { useState } from 'react';
import {Redirect,Switch} from 'react-router-dom';
import FormSignup from  "./FormSignupCv"

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
            <Redirect from="./CvPage" to="./Information"></Redirect>
          </switch>
        
        )}

        


    </>
  );
};

export default Form;
