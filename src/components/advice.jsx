
import { useEffect, useState } from 'react';
import '../css/advice.css';
export const Advice=()=>
    {
        const [advice,Setadvice]=useState("Please Click the button to get Advice");
        const [count,setCount]=useState(0);
        async function adviceHandle()
            {
                const res=await fetch("https://api.adviceslip.com/advice");
                const data=await res.json();
                Setadvice(data.slip.advice);
                setCount((c)=>c+1);
            }
            useEffect(function()
        {
            adviceHandle();//it will load the function initially when enter int o the page
        },[]//=>dependancy array
    )
        return <>
            <div className="advice">
                <p>{advice}</p>
                <button onClick={adviceHandle}>Get Advice</button>
                <p>You have read <b>{count}</b> pieces of advice</p>
                <Counter count={count}/>
            </div>
        </>
    }
    function Counter(props)
    {
        <p>You have read <b>{props.count}</b> pieces of advice</p>
    }