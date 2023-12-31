import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
   <div className="card">
    <img src={emoji} alt="" />
    <span className='heading'>{heading}</span>
    <span className='detail'>{detail}</span>
    <button className='c-button'>More</button>
   </div>
  )
}

export default Card