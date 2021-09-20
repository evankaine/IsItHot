
import { useState, useEffect } from 'react';
import Conditional from './Conditional';
import Response from './Response';
import SearchIcon from '@mui/icons-material/Search';
import "./IsItHot.css"
import axios from "axios"

export default function IsItHot(props) {

  const OPENWEATHER_KEY = process.env.REACT_APP_API_KEY;
  
  // const [disable, setDisable] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [weatherTemp, setWeatherTemp] = useState([]);
  const [weatherName, setWeatherName] = useState([])
  
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}`

  const fetchData = async () => {
    const res = await axios.get(`${URL}&units=imperial&appid=${OPENWEATHER_KEY}`);
    setWeatherTemp(res.data.main.temp);
    setWeatherName(res.data.name)
  };

  useEffect(() => {
    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
    setIsSubmitted(true)
  }

  console.log(inputValue)

  return (
    <div className="hot-wrapper">
      <h1 className="title">IS IT HOT?</h1>
      <form className="search-container" onSubmit={handleSubmit}>
        <input className="search-input" onChange={handleChange}
          placeholder="Enter City or State..."
          type="text">
        </input>
        <button className="enter-button"> <SearchIcon className="search-icon" /> </button>
      </form>
      <div className="response-content">
        {isSubmitted ?
          <>
          
          <Conditional
            weatherTemp={weatherTemp} />
          </>
          : null}
        {isSubmitted ?
          <p className="temp">{ weatherName } is { weatherTemp }℉ </p>
        : null }
      </div>
    </div>
  )
}