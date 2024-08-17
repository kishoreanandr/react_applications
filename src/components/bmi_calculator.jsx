import { useState } from 'react';
import '../css/bmi_calculator.css';
export const Bmicalculator = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState(null);
    const [bmistatus,setBmiStatus]=useState("");
    const [errorMessage,setErrorMessage]=useState("");
    const calculateBmi=()=>
    {
        const isValidHeight=/^\d+$/.test(height);
        const isValidWeight=/^\d+$/.test(weight);
        if(isValidHeight && isValidWeight)
        {
            const heightInMeters=height/100;
            const bmiValue=weight/(heightInMeters*heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue<18.5)
            {
                setBmiStatus("UnderWeight");
            }
            else if(bmiValue>=18.5 && weight<=24.9)
            {
                setBmiStatus("Normal Weight");
            }
            else if(bmiValue>=25 && bmiValue<29.9)
            {
                setBmiStatus("Over Weight");
            }
            else
            {
                setBmiStatus("Obese");
            }
            setErrorMessage("");
        }
        else{
            setBmi(null);
            setBmiStatus("");
            setErrorMessage("Please enter valid numeric values for height and weight..")
        }
    }
    const clearAll=()=>
        {
            setBmi(null);
            setBmiStatus("");
            setHeight("");
            setWeight("");
    
        }
    return <>
        <div className="bmiCal">
            <div className="imageBox">
                <img src="assets/bmi.jpg" alt="bmi" />
            </div>

            <div className="inputdata">
                <h1>BMI Calculator</h1>
            {<div className="error">
                <p>{errorMessage}</p>
            </div>}
                <div className="input-container">
                    <label htmlFor="height">Height (cm):</label>
                    <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                </div>
                <button onClick={calculateBmi}>Calculate BMI</button>
                <button onClick={clearAll}>Clear</button>

            {bmi!=null && <div className="result">
                <p>Your BMI is:{bmi}</p>
                <p>Status : {bmistatus}</p>
            </div>}
            </div>
        </div>
    </>
}