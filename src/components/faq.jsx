
import { useState } from 'react';
import '../css/faq.css';
export const Faq=({data})=>
{
    return (
            <div className="faq-accordian">
                <h2>FAQ's</h2>
                {data.map((item)=>
                (
                    <FaqItem key={item.id} question={item.question} answer={item.answer}/>
                ))}
            </div>
    );
}

const FaqItem=({question,answer})=>
    {
        const [show,setShow]=useState(false);
        const toggleShow=()=>
        {
            setShow(!show);
        };
                return (
                <>
                    <div className={`faq-item ${show ? "active":""}`}>
    
                        <div className="faq-item-header"  onClick ={toggleShow}>
                            {question}
                        </div>

                        {show &&
                        (<div className="faq-item-body">
                            <div className="faq-item-body-content">
                                {answer}
                            </div>
                        </div>)
                        }
                    </div>
                </>
        )
    }