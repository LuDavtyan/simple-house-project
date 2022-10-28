import React from "react";
import '../css/pizzaMenu.css'
import { productNoodle } from '../ProductArray/productNoodle'

const NoodleMain = () => {
    return (
      <div className="container">
        <div className="section2"> 
           <div className="pizza">
                    {productNoodle.map((item) => (
                        <div className="card" key={productNoodle.id} >
                            <div> <img src={item.photo}/> </div>
                            <div className="name"> <h4> {item.name} </h4> </div>
                            <div className="description"> <p>  {item.description} </p></div>
                            <div> <span> {item. price} </span></div>
                        </div>
                    )
                 )}
           </div>
      </div>
</div>
      
      
 )
}

export default NoodleMain