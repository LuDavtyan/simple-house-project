import React from "react";
import '../css/main.css'
import { Link } from "react-router-dom";
import PizzaMain from "./pizzaMain";
import SectionThree from "./sectionThree";

const  Main = () => {
   return (
    <div className="container">
       <div className="section1"> 
          <div className="simple"> 
            <h2> Welcome to Simple House</h2>
            <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites. </p>
          </div>
        
          <div className="navMenu">
          <Link to="/pizzaMain"> <button>Pizza</button> </Link> 
          <Link to="/saladMain"> <button>Salad</button> </Link> 
          <Link to="/noodleMain"> <button>Noodle</button></Link> 
          </div>
       </div>
       <PizzaMain/>
       <SectionThree/>
    </div>
   )
}; 

export default Main