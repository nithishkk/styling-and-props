import React from 'react'
export default function Nithish(props){
  console.log(props)

  return (
    <div>
      <h1 style={{color: props.header ? "#888888" :"red" }}>{props.header}</h1>
      <h1>nithish</h1>
      <h1>nithish</h1>
      </div>

  )
}