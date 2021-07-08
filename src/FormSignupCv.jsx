import React from 'react';
import validate from './validateInfoCv';
import useForm from './useFormCv';
import {Link} from "react-router-dom";
import $ from "jquery";





const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit , values, errors } = useForm(
    submitForm,
    validate
  );
  // 
  return (
    <div className="CV_form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="Cv_upload">
        <div className="CvEnglish"><input id="eng" type="file" name="CvEnglish" value={values.CvEnglish} onChange={handleChange} style={{display:"none"}}/>
        <label type="button" for="eng"> Upload your English CV as pdf file (Max size <br></br>file 2MB*)</label>
        {errors.CvEnglish && <p>{errors.CvEnglish}</p>}</div>
        
        <div className="CvGerman"><input id="ger" name="CvGerman" value={values.CvGerman} onChange={handleChange} type="file" style={{display:"none"}}/>
        <label for="ger"> Upload your German CV as pdf file (Max size <br></br>file 2MB*)</label>

        {errors.CvGerman && <p>{errors.CvGerman}</p>}</div>                  
        </div>
        <div className="text"><span>Positions applying for</span></div>
        <div className="input_position">
        <select 
        type="text"
        name="position"
        value={values.position}
        onChange={handleChange}
      
        ><option>Position Required</option><option>A</option><option>B</option><option>C</option></select>
        {errors.position && <p>{errors.position}</p>}
        </div>
        
        {/* <div className="Back_btn">
        <Link to="./HomePage"><button >Back</button></Link></div>
        <div className="nex_btn">
        <button className="Next-btn" type="submit">Next</button>
        </div> */}
      
      <div className="Back_btn">
        <Link to="./HomePage"><button >Back</button></Link></div>
        <div className="nex_btn">
        <button className="Next-btn" type="submit">Next</button>
        </div>
        </form>
    </div>
  );
};

export default FormSignup;