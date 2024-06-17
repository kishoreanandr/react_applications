import { useState } from "react"

export const Cart=()=>
    {
        const [cartcount,setCartCount]=useState(0);
        const handleButton=()=>
            {
                setCartCount(cartcount+1);
            }
        return ( <> 
            <div>
               <h2>Total No of Items:{cartcount}</h2>
               <button onClick={handleButton}>Add to cart</button> 
            </div>
        </>)
    }