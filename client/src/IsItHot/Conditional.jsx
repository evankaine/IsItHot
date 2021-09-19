import React from 'react'

export default function IsItHotContent(props) {

  const { weatherTemp } = props

    if (weatherTemp >= 80) {
      return (<h2>yea. it's hot</h2>)
    } else if (weatherTemp <= 79 && weatherTemp >= 60) {
      return (<h2>nah. it is warm tho</h2>)
    } else if (weatherTemp <= 59 && weatherTemp >= -80) {
      return (<h2>nah. it's cold</h2>)
    } 
}