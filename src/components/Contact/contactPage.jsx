import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import '../css/contactPage.css'
import Faqs from "./faqs";


const ContactPage = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [nameError, setNameError] = useState('* Name address cannot be empty.')
    const [emailError, setEmialError] = useState('* Email address cannot be empty.')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || nameError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, nameError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if( !re.test(String(e.target.value).toLowerCase())){
            setEmialError('Incorrect email.')
        } else{
            setEmialError('')
        }
    }


    const nameHandler = (e) => {
        setName(e.target.value)
        const re =/^[A-Z]/ ;
        if( !re.test(e.target.value)){
            setNameError('First letter must be uppercase')
        } else{
            setNameError('')
        }
    }

    const blurHeandler = (e) => {
         switch (e.target.name){
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
         }
    }


    return(
        <div className="container">
          <div className="section7">
            <div className="contact">
                <h2>Contact Page </h2>
                <p>You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template. </p>
            </div>

         <div className="contactBox">
            <form className="contactForm">
                {(nameDirty && nameError) && <div className="error"> {nameError}</div>}
                <input onChange={e => nameHandler(e)}  onBlur={e => blurHeandler(e)} value={name} name="name" type='text' placeholder="Name" />
                {(emailDirty && emailError) && <div className="error"> {emailError}</div>}
                <input  onChange={e => emailHandler(e)}  value={email} onBlur={e => blurHeandler(e)} name="email"  type='emil' placeholder="Email" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                <div className="btnSend"> <button disabled={!formValid}>Send</button></div>  
            </form>

            <div className="contactAddress">
                <h4> Our Address </h4>
                <p> 180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                <i class="fa-solid fa-phone-flip"> <a href="tel:+0800900110"> 080-090-0110 </a>  </i>
                <i class="fa-solid fa-envelope"> <a href="info@company.co"> info@company.co </a>  </i>
                <div className="addressIcon">
                      <div className="iconSocial"> <a href="#">  <i class="fa-brands fa-facebook"> </i></a></div>
                      <div className="iconSocial"> <a href="#">  <i class="fa-brands fa-twitter">  </i></a></div>
                      <div className="iconSocial"> <a href="#">  <i class="fa-brands fa-instagram"></i></a></div>
                </div>
            </div>

        </div>
            
            <div className="map">
                    <iframe
                    src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71503.10809967679!2d-3.275378239694838!3d55.94118848775276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2z0K3QtNC40L3QsdGD0YDQsywg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2s!4v1666403899728!5m2!1sru!2s" 
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    />
            </div>
         </div>
         <Faqs/>
     </div>
    )
}

export default ContactPage




