import React from "react";
import '../css/section3.css'
import img from "../images/img-01.jpg"
import { Link } from "react-router-dom";


const SectionThree = () => {
 return (
    <div className="container">
            <div className="maecenas"> 
              <div className="footerImg"><img src={img} alt="img" /></div>
                <div className="nulla">
                  <h3> Maecenas nulla neque</h3>
                  <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis. </p>
                  <div className="btn">  <Link to="/aboutMain"><button>Read More</button></Link> </div>
                </div>
            </div>
    </div>
 )
}

export default SectionThree