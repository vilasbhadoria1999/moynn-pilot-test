import React from 'react';
import validate from './validateInfoInf';
import useForm from './useFormInf';
import {Link} from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit , values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
    <div className="Information_form">
        
        <div className="Information_form_left">
        <select type="select" name="ResidenceCountry" value={values.ResidenceCountry} onChange={handleChange} ><option>City of Country</option><option>A</option><option>B</option><option>C</option></select>
        {errors.ResidenceCountry && <p>{errors.ResidenceCountry}</p>}
        <select type="select"  name="Visa" value={values.Visa} onChange={handleChange} placeholder="Visa Status"><option>Visa Status</option><option>A</option><option>B</option><option>C</option></select>
        {errors.Visa && <p>{errors.Visa}</p>}
        <div className="checkbox1">
        <input type="checkbox" id="tick1" name="checkbox1" value={values.checkbox1} onChange={handleChange}  ></input>
        <label for="tick1">Currently Employed</label>
        {errors.checkbox1 && <p>{errors.checkbox1}</p>}
        </div>
        <input type="tel"  name="Telephone" value={values.Telephone} onChange={handleChange}  placeholder="+49 30901820"></input>
        {errors.Telephone && <p>{errors.Telephone}</p>}
        </div>
        <div className="Information_form_right">
        <input type="text"  name="ResidenceCity" value={values.ResidenceCity} onChange={handleChange}  placeholder="City of Residence"></input>                
        {errors.ResidenceCity && <p>{errors.ResidenceCity}</p>}
        <input type="date" name="date" value={values.date} onChange={handleChange}  placeholder="mm/dd/yyyy"></input>
        {errors.date && <p>{errors.date}</p>}
        <div className="checkbox2">
        <input id="tick2" type="checkbox"  name="checkbox2" value={values.checkbox2} onChange={handleChange}  ></input>
        <label for="tick2">EU Driver's License</label>
        {errors.checkbox2 && <p>{errors.checkbox2}</p>}
        </div>
        <input type="number"  name="NoticePeriod" value={values.NoticePeriod} onChange={handleChange}  placeholder="Notice Period (in Months )"></input>
        {errors.NoticePeriod && <p>{errors.NoticePeriod}</p>}
        </div>
    </div>    
        <div className="Back_btn_inf">
        <Link to="./CvPage"><button>Back</button></Link></div>
        <div className="nex_btn_inf">
        <button className="Next-btn_inf" type="submit">Next</button>
        </div>


    </form>
  );
};

export default FormSignup;