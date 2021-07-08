import React from "react";
import "./Nav.css";

const Nav = () => {
    return(
    <div className="Nav_bar">
        <div className="Nav_logo"><a href="https://moyyn.com/"><img src="\images\logo.png" /></a></div>
        
                <div className="nav_btn">
                
                    <div className="first_btn"><a href="https://moyyn.com/en-companies/">For Comapnies</a></div>
                    <div className="second_btn"><a href="./HomePage">For Candidates</a></div>
                    <div className="third_btn"><a href="https://moyyn.com/DE/">DE</a></div>
                    <div className="forth_btn"><a href="https://moyyn.com/">EN</a></div>
                    <div className="fifth_btn"><a href="https://app.moyyn.com/candidate/check-application">Login</a></div>
    
        
                
        
            </div>

                     <div className="Nav_btn"><button onClick={"./HomePage"}>SignUp</button></div>
    </div>
    )
}

export default Nav;