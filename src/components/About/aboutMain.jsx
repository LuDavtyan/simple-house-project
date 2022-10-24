import React from "react";
import { staff } from "../StaffArray/staff";
import '../css/aboutMain.css'
import SectionSix from "./sectionSix";

const AboutMain = () => {
    return (
        <div className="container">
           <div className="section4">
            <div className="aboutSimple">
                <h2> About Simple House</h2>
                <p>This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect. </p>
            </div>
           </div>
            <div className="section5">
                <div className="staffBox">
                {staff.map((item)=> (
                    <div className="cardStaff" key={staff.id} >
                        <div> <img src={item.avatar}/> </div>
                     <div className="info">  
                        <div> <h4> {item.name} </h4>   </div>
                        <div> <p className="prof">  {item.profession}  </p> </div>
                        <div> <p className="description2">  {item.description} </p></div>
                        <div>{(() =>{
                          if(item.name == 'Jennifer Soft'){
                            return(
                                <div className="social">
                                 <div className="icon"> <a href="#">  <i class="fa-brands fa-facebook"> </i></a></div>
                                 <div className="icon"> <a href  ="#"><i class="fa-brands fa-twitter">  </i></a></div>
                                 <div className="icon"> <a href="#">  <i class="fa-brands fa-instagram"></i></a></div>
                                </div> 
                            )
                          }else if(item.name =='Daisy Walker'){
                            return(
                               <div className="social">
                                   <div  className="icon"> <a href="#">  <i class="fa-brands fa-facebook"> </i></a></div>
                                   <div  className="icon"> <a href="#">  <i class="fa-brands fa-twitter">  </i></a></div>
                               </div> 
                            )
                          }else if(item.name == 'Florence Nelson'){
                            return(
                                <div className="social">
                                  <div  className="icon"> <a href="#">  <i class="fa-brands fa-facebook">  </i></a></div>
                                  <div  className="icon"> <a href="#">  <i class="fa-brands fa-instagram"> </i></a></div>
                                </div> 
                            )
                          }else if(item.name =='Valentina Martin'){
                             return(
                                <div className="social">
                                   <div  className="icon"><a href="#"> <i class="fa-brands fa-facebook"> </i></a></div>
                                   <div  className="icon"><a href="#"> <i class="fa-brands fa-twitter">  </i></a></div>
                                   <div  className="icon"><a href="#"> <i class="fa-brands fa-instagram"></i></a></div>
                                   <div  className="icon"><a href="#"> <i class="fa-brands fa-youtube">  </i> </a></div>
                                </div> 
                             )
                          }else{
                            <div> <span>{ '' }</span></div>
                          }
                        }) () }
                           </div>
                        </div>
                    </div>
                ))} 
                </div>
            </div>
            <SectionSix/>
        </div>
    )

}

export default AboutMain