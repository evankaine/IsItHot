import React from 'react'

export default function Response(props) {

  const { weatherTemp, weatherName } = props

  return (
    <div>
      <p>{ weatherName } is { weatherTemp }℉ </p>
    </div>
  )
}
