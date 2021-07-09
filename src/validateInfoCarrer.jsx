export default function validateInfoCarrer(values) {
    let errors = {};
  
   
  
  
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