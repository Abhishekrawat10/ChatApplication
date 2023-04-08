import React from 'react'
import Person from "../images/Person.jpg"

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a User'/>
      </div>
      <div className="userChat">
        <img src={Person} alt="" srcset="" />
        <div className="userChatInfo"></div>
        <span>Jane</span>
      </div>
    </div>
  )
}

export default Search