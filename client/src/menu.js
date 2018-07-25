import React from 'react'

 const menu=(props) => {
  return (
    <div>
        <h1>el 3eeb fehom</h1>
      <button className="btn" onClick={props.clickpun}>Puns </button>
      <button className="btn" onClick={props.clickpick}>Pick Me Up! </button>      
      <button className="btn" onClick={props.clickfact}>Facts </button>
      <button className="btn" onClick={props.clickquote}>Inspire Me! </button>
    </div>
  )
};
export default menu