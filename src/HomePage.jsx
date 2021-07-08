import React from "react";
import Nav from "./Nav";
import CV from "./CvPage";
import "./HomePage.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Form from "./Form";


const HomePage = () => {
    
    return(
        
        <>
        <Nav />
        <div className="container">
            <div className="home_templete">
                <h3>The journey to your next job starts here</h3>
                <img src="\images\HomePage_img.png" alt=""/>
                <p>Join our talent pool for free and let our AI find you the perfect job</p>
            </div>
            <Form/>
           
            <div className="HomePage_Footer">
                <div className="Footer_left">
                    <div className="Footer_left_heading"><h3>Sourcing talents to germany</h3></div>
                    <div className="address_menu">
                        <ul>
                            <li><LocationOnIcon className="right_icon"/>Startup Incubator Berlin, Rohrdamm 88, 13629 Berlin</li>
                            <li><EmailRoundedIcon className="right_icon"/>talent@moyyn.com</li>
                            <li><p>Moyyn Group is a venture of MyHelpBuddy UG supported by<br></br> European Union Social Fund and Berlin Senate</p></li>
                            <li><FacebookIcon className="right_icon"/> < LinkedInIcon className="right_icon"/> </li>
                        </ul>
                    </div>
                </div>
                <div className="Footer_middle">
                    <div className="Footer_middle_heading"><h3>Links</h3></div>
                    <div className="Footer_middle_links">
                        <ul>
                            <li><a href=""><ChevronRightIcon  className="right_icon"/>Submit your CV</a></li>
                            <li><a href=""><ChevronRightIcon  className="right_icon"/>Jobs</a></li>
                            <li><a href=""><ChevronRightIcon  className="right_icon"/>Companies</a></li>
                            <li><a href=""><ChevronRightIcon className="right_icon"/>Terms</a></li>
                            <li><a href=""><ChevronRightIcon className="right_icon"/>Privacy</a></li>
                            <li><a href=""><ChevronRightIcon className="right_icon"/>Imprint</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Footer_right">
                    <div className="Footer_right_heading"><h3>Supported by</h3></div>
                    <div className="companies_logo">
                        <ul>
                            <li><a href=""><img src="\images\1_SIB_Logo.png" alt=""/></a></li>
                            <li><a href=""><img src="\images\3_be_Berlin_Logo-300x73.png" alt=""/></a></li>
                            <li><a href=""><img src="\images\S2A-european-union-social-fund-288x300.jpg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Footer_end">
                <p>© 2021 Moyyn. All rights reserved.</p>
            </div>
        </div>
        </>
    )
    };

export default HomePage;






