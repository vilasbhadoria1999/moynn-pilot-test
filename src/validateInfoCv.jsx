export default function validateInfoCv(values) {
    let errors = {};
  
   
    
  
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