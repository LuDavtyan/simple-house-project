import React from "react";
import { useState } from "react";
import { data } from "../FaqsData/data";

const Faqs = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }


    return (
        <div className="container">
            <div className="section8">
                <div className="faqs">
                    <h2> FAQs</h2>
                    <p>This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666</p>
                </div>

                <div className="dataBox">
                    {data.map((item, i) => (
                       <div key={data.id}>
                         <div className="questionBox">
                            <div className="question"  onClick={() => toggle(i)}>
                                <h4>{item.question}</h4>
                                <span>{selected === i ? '⇓': '⇐ '}</span>
                            </div>
                         </div>
                         
                          <div className={ selected === i ? "answer show" : 'answer' }>
                              <p>{item.answer}</p>
                          </div>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs