import React, { useState } from 'react';
import {Redirect,Switch} from 'react-router-dom';
import FormSignup from  "./FormSignupCarrer"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm}  />
        
        ) : (
        
          <switch>
            <Redirect from="./Carrer" to="./HomePage"></Redirect>
          </switch>
        
        )}

        


    </>
  );
};

export default Form;