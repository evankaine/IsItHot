import React from 'react'

export default function Response(props) {

  const { weatherTemp, weatherName } = props

  return (
    <div>
      <p className="temp">{ weatherName } is { weatherTemp }℉ </p>
    </div>
  )
}
