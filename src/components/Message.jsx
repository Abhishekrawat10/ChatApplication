import React from 'react'
import Person from '../images/Person.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Person} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
      <p>hello</p>
      <img src={Person} alt="" />                
      </div>
    </div>
  )
}

export default Message