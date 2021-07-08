import React from 'react';
import validate from './validateInfoCarrer';
import useForm from './useFormCarrer';
import {Link} from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit , values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
        <div className="carrer_form">
            <div className="upper_div">
           <select type="select"  name="Carrer_level" value={values.Carrer_level} onChange={handleChange}  ><option>Carrer Level</option><option>A</option><option>B</option><option>C</option></select>
           {errors.Carrer_level && <p>{errors.Carrer_level}</p>}
           <select type="select" name="Industries" value={values.Industries} onChange={handleChange}><option>Industries</option><option>A</option><option>B</option><option>C</option></select>
           {errors.Industries && <p>{errors.Industries}</p>}
           <input type="text" name="Skills" value={values.Skills} onChange={handleChange} placeholder="Skill"></input>
           {errors.Skills && <p>{errors.Skills}</p>}
           <span>Work Experience (Add your experiences)</span>
            </div>
            <div className="middle_div">
                <div><select type="select" name="Category" value={values.Category} onChange={handleChange} ><option>Category</option><option>A</option><option>B</option><option>C</option></select>
                {errors.Category && <p>{errors.Category}</p>}
                </div>
                <div><select type="select" name="Role" value={values.Role} onChange={handleChange} ><option>Role</option><option>A</option><option>B</option><option>C</option></select>
                {errors.Role && <p>{errors.Role}</p>}
                </div>
                <div><select type="select" name="Experience" value={values.Experience} onChange={handleChange} ><option>Experience</option><option>A</option><option>B</option><option>C</option></select>
                {errors.Experience && <p>{errors.Experience}</p>}
                </div>
            </div>
            <div className="lower_div">
            <div className="lower_div_right">
            <select type="select" name="Languages" value={values.Languages} onChange={handleChange}><option>Languages</option><option>A</option><option>B</option><option>C</option></select>
            {errors.Languages && <p>{errors.Languages}</p>}
            </div>
            <div className="lower_div_left">
            <select type="select" name="Level" value={values.Level} onChange={handleChange} ><option>Level</option><option>A</option><option>B</option><option>C</option></select>
            {errors.Level && <p>{errors.Level}</p>}
            </div>
            </div>
            <div className="Back_btn_carrer">
            <Link to="./Information"><button>Back</button></Link></div>
            <div className="nex_btn_carrer">
            <button  className="Next-btn_carrer"type="submit">Submit</button>
            </div>
            
        
        </div>
        </form>
  );
};

export default FormSignup;