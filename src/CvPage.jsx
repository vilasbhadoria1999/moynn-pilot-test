import React from "react";
import Nav from "./Nav";
import "./CvPage.css"

import {Link} from "react-router-dom";
import Form from "./formCv";

const CvPage = () => {
   
    
    return(
        <>
        <Nav />
        <div className="container_cv">
            <div className="CV_left">
                <div className="btn_cv">
                    <Link to="./CvPage"><button className="first-button">1</button></Link>
                    <Link to="./Information"><button>2</button></Link>
                    <Link to="./Carrer"><button>3</button></Link>
                </div>
                <p>Upload your CV</p>
                <img src="\images\CV_Page_logo.png" alt=""/>
            </div>
            <Form />
            {/* <div className="CV_form">
                <form onSubmit={handleSubmit} noValidate>
                <input name="Upload Saved Replay" type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
                <input name="Upload Saved Replay" type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>                    
                <p>Positions applying for</p>
                    <input 
                    type="select"
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                    placeholder="Position Required" 
                    ></input>
                {errors.position && <p>{errors.position}</p>}
                <div className="NextPage_btn">
                <Link to="./HomePage"><button>Back</button></Link>
                    <button  type="submit">Next</button>
                </div>
                </form>
            </div> */}
        </div>
        </>
    )
}

export default CvPage;