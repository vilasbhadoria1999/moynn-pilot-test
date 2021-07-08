import React from "react";
import Nav from "./Nav";
import "./Information.css";
import {Link} from "react-router-dom";
import Form from "./formInf";


// const Information = () => {
//     return(
//         <>
//         <Nav />
//         <div className="Information_left">
//             <div>
//                 <button>1</button>
//                 <button>2</button>
//                 <button>3</button>
//             </div>
//             <p>Personal Information</p>
//             <img src="\images\Information_page_logo.png" />
//         </div>
//         <div className="Information_form">
//             <ul>
//                 <li><input type="select" name="country" placeholder="Country of Residence"></input></li>
//                 <li><input type="select"></input></li>
//                 <li><input type="checkbox" value="Currently Employed"></input></li>
//                 <li><input type="phone"></input></li>
//                 <button>Back</button>
//             </ul>
//             <ul>
//             <li><input type="text"  placeholder="City of Residence"></input></li>
//                 <li><input type="date" placeholder="mm/dd/yyyy"></input></li>
//                 <li><input type="checkbox" value="EU Driver's License"></input></li>
//                 <li><input type="numeric" placeholder="Notice Period (In Months)"></input></li>
//                 <button>Next</button>
//             </ul>
//         </div>
//         </>
//     )
// }
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