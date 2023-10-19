import React from 'react'
import"./ChatMessage"
import"./ChatMessage.scss"
import { Avatar } from '@mui/material'

const ChatMessage = () => {
  return (
    <div className='message'>
     <Avatar />
     <div className='messageInfo'>
        <h4>
            Shin
            <samp className="messageTimestamp">2023/10/18</samp>
        </h4>

        <p>メッセージ本文</p>
     </div>
    </div>
  )
}

export default ChatMessage