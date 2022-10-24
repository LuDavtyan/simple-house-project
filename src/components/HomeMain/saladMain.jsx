import React from "react";
import '../css/pizzaMenu.css'
import { productSalad } from '../ProductArray/productSalad'
import Main from "./main";
import SectionThree from "./sectionThree";

const SaladMain = () => {
    return (
      <div className="container">
        <div className="section2"> 
           <div className="pizza">
                    {productSalad.map((item) => (
                        <div className="card" key={productSalad.id} >
                            <div> <img src={item.photo}/> </div>
                            <div className="name"> <h4> {item.name} </h4> </div>
                            <div className="description"> <p>  {item.description} </p></div>
                            <div> <span> {item. price} </span></div>
                        </div>
                    )
                 )}
           </div>
      </div>
      <SectionThree/>
</div>
      
      
 )
}

export default SaladMain