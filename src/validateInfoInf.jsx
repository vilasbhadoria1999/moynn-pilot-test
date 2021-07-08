export default function validateInfoCv(values) {
    let errors = {};
  
   
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.ResidenceCountry ){
         errors.ResidenceCountry= "*Required field";
       }
    if (!values.Visa ){
        errors.Visa ="*Required field";
      }
    if (!values.checkbox1){
        errors.checkbox1 ="*Required field";
      }
      if (!values.Telephone ){
        errors.Telephone ="*Required field";
      }
      if (!values.ResidenceCity ){
        errors.ResidenceCity ="*Required field";
      }
      if (!values.date ){
        errors.date ="*Required field";
      }
      if (!values.checkbox2 ){
        errors.checkbox2 ="*Required field";
      }
      if (!values.NoticePeriod ){
        errors.NoticePeriod ="*Required field";
      }
    
    
    return errors;
  }