export default function validateInfo(values) {
    let errors = {};
  
   
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = '*Required field.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '*Please enter a valid email address.';
    }
    if (!values.password) {
      errors.password = '*Required';
    } else if (values.password.length < 6) {
      errors.password = 'Too short - minimum 8 characters reuired';
    }
  
    if (!values.password2) {
      errors.password2 = '*Please confirm the password.';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords must match';
    }

    if (!values.FirstName){
        errors.FirstName ="*Required field";
    } 

    if (!values.LastName){
        errors.LastName ="*Required field";
    } 

    if (!values.checkbox ){
        errors.checkbox ="*Please accept Terms of Use and Privacy Policy";
       

    }
    // if (!values.position ){
    //   errors.position ="plz check";
    // }
    
    return errors;
  }