export default function validateInfoCarrer(values) {
    let errors = {};
  
   
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.Carrer_level ){
         errors.Carrer_level ="*Required field.";
       }
    if (!values.Industries){
        errors.Industries ="*Please pick at least one option.";
      }
    if (!values.Skills){
        errors.Skills ="*Please pick at least one option.";
      }
      if (!values.Category ){
        errors.Category ="*Please pick at least one option";
      }
      if (!values.Role ){
        errors.Role ="required";
      }
      if (!values.Experience ){
        errors.Experience ="Required";
      }
      if (!values.Languages){
        errors.Languages="*Please pick at least one option";
      }
      if (!values.Level ){
        errors.Level ="Required";
      }
    
    
    return errors;
  }