import React from "react";
import Nav from "./Nav";
import "./Carrer.css";
import {Link} from "react-router-dom";
import Form from "./formCarrer";


const Carrer = () => {

return(
    <>
    <Nav />
    <div className="container_carrer">
        <div className="carrer_left">
            <div className="btn_carrer">
            <Link to="./CvPage"><button>1</button></Link>
            <Link to="./Information"><button>2</button></Link>
            <Link to="./Carrer"><button>3</button></Link>
            </div>
            <p>Let us know about your skills</p>
            <img src="\images\CarrerPage_logo.png" />
        </div>
        <Form />
    </div>
    </>
)
}
  
export default Carrer;