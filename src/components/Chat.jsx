import React from 'react'
import Cam from "../images/cam.png"
import Add from "../images/add.png"
import More from "../images/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" srcset="" />
          <img src={Add} alt="" srcset="" />
          <img src={More} alt="" srcset="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
}

export default Chat