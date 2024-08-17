import { useState } from 'react';
import '../css/strongPassword.css';
export const StrongPassword=()=>
{
    const [length,setLength]=useState(8);
    const [includeUpperCase,setincludeUpperCase]=useState(true);
    const [includeLowerCase,setincludeLowerCase]=useState(true);
    const [includeNumbers,setincludeNumbers]=useState(true);
    const [includeSymbols,setincludeSymbols]=useState(true);
    return <>
            <div className="password-generator">
                <h2>Strong Password</h2>
                <div className="input-group">
                    <label htmlFor="num">PasswordLength</label>
                    <input type="number" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="upper" checked={includeUpperCase} onChange={(e)=>setincludeUpperCase(e.target.checked)}/>
                    <label htmlFor="upper">Include UpperCase</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="lower" />
                    <label htmlFor="lower">Include LowerCase</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="number" />
                    <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="symbol" />
                    <label htmlFor="symbols">Include Symbols</label>
                </div>
                <button className="generate-btn">Generate Button</button>
                <div className="generated-button">
                    <input type="text" readOnly/>
                    <button className="copy-btn">Copy</button>
                </div>
            </div>
    </>
}