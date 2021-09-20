# Project Overview

## Is It Hot?

https://isithot.netlify.app/

## Project Description

"Is It Hot" allows the user to input a location into search and find out if the inputted location is hot or not. 
This React Application was created to showcase my ability to implement an API into a project and utilize useState, useEffect, and props.

## API and Data Sample

https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&appid={API_KEY}

```json
{
coord: {
lon: -74.006,
lat: 40.7143
},
weather: [
{
id: 803,
main: "Clouds",
description: "broken clouds",
icon: "04d"
}
],
base: "stations",
main: {
temp: 75.16,
feels_like: 74.88,
temp_min: 72.07,
temp_max: 77.29,
pressure: 1027,
humidity: 53
},
visibility: 10000,
wind: {
speed: 9.22,
deg: 140
},
clouds: {
all: 75
},
dt: 1632165595,
sys: {
type: 1,
id: 4610,
country: "US",
sunrise: 1632134508,
sunset: 1632178621
},
timezone: -14400,
id: 5128581,
name: "New York",
cod: 200
}
```

#### MVP 

- render API data on page
- Create Search that will call the data for the inputted location

#### PostMVP  

- disable button unless input has value

## Code Snippet

```
export default function IsItHotContent(props) {

  const { weatherTemp } = props

    if (weatherTemp >= 80) {
      return (<h2 className="hot" id="answer">Yea.</h2>)
    } else if (weatherTemp <= 80 && weatherTemp >= 60) {
      return (<h2 className="warm" id="answer">Nah.</h2>)
    } else if (weatherTemp <= 59) {
      return (<h2 className="cold" id="answer">Nah.</h2>)
    } else {
      return ("idk")
    }
}
```