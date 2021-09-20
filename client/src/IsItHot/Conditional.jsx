import React from 'react'

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