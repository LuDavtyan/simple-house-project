import React from "react";
import '../css/header.css'
import logo from "../images/simple-house-logo.png"
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'test' : '';

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                    <div className="headerMenu"> 
                       <div className="logo">
                          <div><img src={logo} alt="logo.img" /></div>
                              <div>
                                 <h1>Simple House</h1>
                                 <p>new restaurant template</p> 
                               </div>
                      </div>
                  <div className="menu">
                        <ul>
                            <li><NavLink className={setActive} to="/homeMain"> Home </NavLink> </li>
                            <li><NavLink className={setActive} to="/aboutMain">About </NavLink> </li>
                            <li><NavLink className={setActive} to="/contactPage">Contact </NavLink> </li>
                        </ul>
                   </div>       
                </div>
            </div>
        </div>
     
    )
}

export default Header


