export default function validateInfoCv(values) {
    let errors = {};
  
   
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.position ){
         errors.position ="*Please pick at least one option.";
       }
    if (!values.CvEnglish ){
        errors.CvEnglish ="*Please pick a file";}
      

    
      
      if (!values.CvGerman){
        errors.CvGerman ="*Please pick a file";
      }
    
    
    return errors;
  }