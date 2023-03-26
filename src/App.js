import React from "react";
import "./style.css";
import Nithish from './Nithish'
const data="nithish love react"
export default function App() {
  return (
    <div>
      <Nithish header={data}/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
