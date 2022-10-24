import React from "react";
import img from '../images/about-05.jpg'
import img2 from '../images/about-06.jpg'
import '../css/section6.css'

const SectionSix = () => {
    return(
        <div className="container">
            <div className="section6">
         
           <div className="parallaxBox">
              <div className="parallax"> </div> 
            </div>         
    
             <div className="readMore"> 
                <div className="infoCard">
                    <div> <i class="fa-solid fa-pepper-hot"></i> </div>
                    <div className="infoText"> <p> Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p></div>
                    <button className="btn1">  Read More</button>
                </div>

                <div className="infoCard">
                    <div><i class="fa-solid fa-seedling"></i> </div>
                    <div className="infoText"> <p> Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p></div>
                    <button className="btn2">  Read More</button>
                </div>

                <div className="infoCard">
                    <div> <i class="fa-solid fa-martini-glass-citrus"></i> </div>
                    <div className="infoText"> <p>Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium pretium rutrum molestie. Duis dignissim egestas turpis sit. </p></div>
                    <button className="btn3">  Read More</button>
              
                </div>

              </div>

            <div className="historyBox">
                <div> <img src={img2} alt="img" /></div>
                <div className="history">
                    <h4>History of our restaurant </h4>
                    <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue. </p>
                    <p> Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                </div>


             </div>


            </div>
        </div>
    )
}

export default SectionSix