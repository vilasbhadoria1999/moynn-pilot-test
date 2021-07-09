import React from "react";
import Nav from "./Nav";
import "./Information.css";
import {Link} from "react-router-dom";
import Form from "./formInf";



const Information = () => {
    return(
        <>
        <Nav />
        <div className="container_Information">
            <div className="Information_left">
                <div className="btn_inf">
                <Link to="./CvPage"><button>1</button></Link>
                <Link to="./Information"><button>2</button></Link>
                <Link to="./Carrer"><button>3</button></Link>
                </div>
                <p>Personal Information</p>
                <img src="\images\Information_page_logo.png" />
            </div>
            <Form />
        </div>
        </>
    )
}

export default Information;