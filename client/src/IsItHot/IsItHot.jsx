import { useState, useEffect } from 'react';
import IsItHotContent from './IsItHotContent';
import "./IsItHot.css"
import axios from "axios"

const OPENWEATHER_KEY = process.env.REACT_APP_API_KEY;

const URL = `https://api.openweathermap.org/data/2.5`

// /weather?q=new%20york&units=imperial&appid=${OPENWEATHER_KEY}

export default function IsItHot(props) {

  const [formInput, setFormInput] = useState('')
  const [weatherData, setWeatherData] = useState([]);


  useEffect(() => {
    handleInput();
  }, []);
  const handleInput = async () => {
    const res = await axios.get(`${URL}/weather?q=miami&units=imperial&appid=${OPENWEATHER_KEY}`);
    setWeatherData(res.data.main);
    console.log(formInput)
  };

  return (
    <div className="hot-wrapper">
      <h1>Is It Hot ?</h1>
      <form>
        <input placeholder="City" onChange={e => setFormInput(e.target.value)}></input>
        <button onClick={() => handleInput()}>Is It Hot</button>
      </form>
      <IsItHotContent weatherData={weatherData}/>
    </div>
  )
}
