import { useEffect, useState } from 'react';
import '../css/weather.css';
const WeatherDetails = ({ icon, temp, city, country, long,lat,humidity,wind}) => {
    return (
        <>
            <div className='image'>
                <img src={icon} alt="weather" />
            </div>
            <div className="temp">
                {temp}°C
            </div>
            <div className="location">
                {city}
            </div>
            <div className="country">
                {country}
            </div>
            <div className="co-ordinates">
                <div>
                    <span className='lat'>Latitude </span>
                    <span>{lat}</span>
                </div>
                <div >
                    <span>Longitude </span>
                    <span>{long}</span>
                </div>
            </div>

            <div className="data-container">
                <div className="element">
                    <img src="assets/flood.png" alt="" />
                    <div className="data">
                        <div className="humidity-percent">
                            {humidity}
                        </div>
                        <div className="text">
                            Humidity
                        </div>
                    </div>
                </div>

                <div className="element">
                    <img src="assets/wind.png" alt="wind" />
                    <div className="data">
                        <div className="wind-percent">
                            {wind}
                        </div>
                        <div className="text">
                            Wind Speed
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export const Weather = () => {
    const [icon, setIcon] = useState("assets/sun.png");
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("Chennai");
    const [country, setCountry] = useState("India");
    const [long,setlong]=useState(0);
    const [lat,setlat]=useState(0);
    const [humidity,setHumidity]=useState('85%');
    const [wind,setWind]=useState("5km/h")
    const [text,setText]=useState("Chennai");

    const [loading,setLoading]=useState(false);
    const [cityNotfound,setCityNotFound]=useState(false);
    const [error,setError]=useState(null);
    
    const weatherIconMap=
    {
        "01d":"assets/sun.png",
        "01nd":"assets/sun.png",
        "02d":"assets/cloud.png",
        "02n":"assets/drizzle.jpg",
        "03d":"assets/drizzle.jpg",
        "04d":"assets/drizzle.jpg",
        "04n":"assets/drizzle.jpg",
        "09d":"assets/rain.jpg",
        "09n":"assets/rain.jpg",
        "10d":"assets/rain.jpg",
        "10n":"assets/rain.jpg",
        "13d":"assets/snow.png",
        "13n":"assets/snow.png"
    }

    const search =async()=>
    {
        setLoading(true);
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=dc1f405255bb84f8d8e09a6fed353ad9
`;
        try
        {
            let res=await fetch(url);
            let data=await res.json();
            if(data.cod==="404")
            {
                setLoading(false);
                setCityNotFound(true);
                console.error("City Not Found");
                return;
            }
            setTemp(Math.floor(data.main.temp));
            setCity(data.name);
            setCountry(data.sys.country);
            setWind(data.wind.speed);
            setHumidity(data.main.humidity);
            setlong(data.coord.lon);
            setlat(data.coord.lat);

            const weatherIconCode=data.weather[0].icon;
            setIcon(weatherIconMap[weatherIconCode] || "assets/sun.png");
            setCityNotFound(false);
        }
        catch(err)
        {
            console.log("Error Ocuured: "+err);
            setError("An Error Occured while fetching data..");
    
        }
        finally
        {
            setLoading(false);
        }
    };
    useEffect(function()
    {
        search();
    },[]);
    const handleCity=(e)=>
    {
        setText(e.target.value);
    }; 
    const handleKeyDown= (e)=>
    {
        if(e.key=== "Enter")
        {
            search();
        }
    };
    const imgclick=()=>
    {
        search();
    }
    return <>
        <div className='container'>
            <div className='input-Container'>
                <input type="text" className='cityInput' placeholder='Search City' 
                    onChange={handleCity}
                    value={text} onKeyDown={handleKeyDown}/>
                <div className='search-icon'>
                    <img src='assets/search.png' alt="search" onClick={imgclick}></img>
                </div>
            </div>
            {loading && <div className="loading-message">
                Laoding...
            </div>}
            {error && <div className="error-message">
                {error}
            </div>}
            {cityNotfound && <div className="city-not-found">
                City Not Found..
            </div>}
            {!loading && !cityNotfound && <WeatherDetails icon={icon} temp={temp} city={city}
                country={country} long={long} lat={lat} humidity={humidity} wind={wind}/>}
            <div className="copyrights">
                <p>Designed by <span>Kishore</span></p>
            </div>
        </div>
    </>
}

