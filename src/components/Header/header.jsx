import React from "react";
import '../css/header.css'
import { useState } from "react";
import logo from "../images/simple-house-logo.png"
import { list } from '../StaffArray/staff'

const Header = () => {

    const [index_id, setindex_id] = useState("");
    const nav_click_handler = li => {
        setindex_id(li);
    };
 

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
                      {list.map((li, index) => (
                            <div className="ul" key={list.li} onClick={() => nav_click_handler(index) }>
                                <div >{li.li}</div>
                                <div className={index === index_id ? "test" : ""} />
                            </div>
                            ))}
                   </div>       
                </div>
            </div>
        </div>
     
    )
}

export default Header