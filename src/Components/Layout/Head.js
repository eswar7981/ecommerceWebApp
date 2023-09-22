import React from 'react'
import './Head.css'
const Head = (props) => {
  return (
 <>
 <div className='container'>
 <h1>head</h1>
 <button onClick={props.openCart}>Cart</button>
 </div>
 </>
  )
}

export default Head
