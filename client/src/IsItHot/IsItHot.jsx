import { useState, useEffect } from 'react';
import IsItHotContent from './IsItHotContent';
import Form from './Form';
import "./IsItHot.css"
import axios from "axios"


const OPENWEATHER_KEY = process.env.REACT_APP_API_KEY;

const URL = `https://api.openweathermap.org/data/2.5`

// /weather?q=new%20york&units=imperial&appid=${OPENWEATHER_KEY}


export default function IsItHot(props) {

  const [weatherData, setWeatherData] = useState([]);
  const [formInput, setFormInput] = useState('')
  // const { formInput } = props

  const submitForm = (e) => {
    e.preventDefault()
    setFormInput()
  }
  console.log(formInput)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(`${URL}/weather?q=${formInput}&units=imperial&appid=${OPENWEATHER_KEY}`);
    setWeatherData(res.data.main);
  };
  
  return (
    <div className="hot-wrapper">
      <h1>Is It Hot ?</h1>
      <form onSubmit={submitForm}>
        <input></input>
        <button>Is It Hot</button>
      </form>
      <IsItHotContent weatherData={weatherData}/>
    </div>
  )
}
