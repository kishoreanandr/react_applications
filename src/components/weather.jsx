import { useState } from 'react';
import '../css/weather.css';
const WeatherDetails=({icon})=>
    {
        return (
            <>
                <div className='image'>
                    <img src={icon} alt="weather"/>
                </div>
                
            </>
        );
    };
export const Weather = () => {
    const [icon,setIcon]=useState("assets/sun.png")
    return <>
        <div className='container'>
            <div className='input-Container'>
                <input type="text" className='cityInput' placeholder='Search City' />
            <div className='search-icon'>
                <img src='assets/search.png' alt="search"></img>
            </div>
            </div>
            <WeatherDetails icon={icon}/>
        </div>
    </>
}

