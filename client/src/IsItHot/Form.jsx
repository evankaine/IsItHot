import React from 'react'
import IsItHot from './IsItHot'
import { useState, useEffect } from 'react';

export default function Form() {

  const [formInput, setFormInput] = useState('')
  


  useEffect(() => {
    submitForm();
  }, []);
  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input onSubmit={setFormInput} />
        <button>Is It Hot</button>
      </form>

      <IsItHot formInput={formInput} />
    </div>
  )
}
