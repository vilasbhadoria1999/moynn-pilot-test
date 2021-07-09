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
            
        </div>
        </>
    )
}

export default CvPage;