import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit , values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="home_form">
        <form onSubmit={handleSubmit} noValidate >
            <div className="form_upper">
                <div className="email_div">
                    <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={values.email} 
                    onChange={handleChange}/>
                 <div className="errors">{errors.email && <p>{errors.email}</p>}</div>
                </div>
                <div className="password_div">
                    <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={values.password} 
                    onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="confirm_div">
                    <input 
                    type="password" 
                    className="pass" placeholder="Confirm Password" 
                    name="password2"
                    value={values.password2} 
                    onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
            </div>
            <div className="form_middle" >
                <div className="firstName">
                    <input  type="text" 
                    placeholder="First Name"
                    name="FirstName"
                    value={values.FirstName} 
                    onChange={handleChange}/>
                    {errors.FirstName && <p>{errors.FirstName}</p>}
                </div>
                <div className="lastName">
                    <input 
                    type="text" 
                    placeholder="Last Name" 
                    name="LastName"
                    value={values.name} 
                    onChange={handleChange}/>
                    {errors.LastName && <p>{errors.LastName}</p>}
                </div>
            </div>
            <div className="form_lower">
                 <label ><span>Currently Looking For a Job</span></label> 
            </div>
            <div className="Checkbox_area">
                <label><div className="checkbox"><input 
                type="checkbox" 
                name="checkbox"
                value={values.checkbox}
                onChange={handleChange}
                /></div><div className="checkbox_text">By submitting the application I confirm I have read and agreed to the <span>Terms of use </span>and <span>Privacy Policy</span>.</div></label>
                 {errors.checkbox && <p>{errors.checkbox}</p>} 

            </div> 
            <div className="form_btn">
            <button type="submit">Next </button>
            </div>
        </form>
        <p>Already submitted an application? Check application status <a href="">here</a></p>
    </div>
  );
};

export default FormSignup;