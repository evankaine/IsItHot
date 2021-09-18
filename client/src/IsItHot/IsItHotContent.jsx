import React from 'react'

export default function IsItHotContent(props) {

  const { weatherData } = props
  console.log(weatherData)
    if (weatherData >= 85) {
      // console.log("yea it's hot")
      return ("yea. it's hot")
    } else if (weatherData <= 50) {
      // console.log("nah it's cold")
      return ("nah. it's cold")
    } else {
      // console.log("nah it's warm tho")
      return ("nah. it is warm tho")
    }

}
  
  