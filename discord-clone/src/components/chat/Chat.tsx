import React from 'react'
import"./Chat.scss"
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  // console.log(channelName)

  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader channelName={channelName}/>
      {/* chatMessage */}
      <div className='chatMassage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder='#Udemyへメッセージを送信' />
          <button type='submit'className='chatInputButton'>
            送信
          </button>
        </form>

        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <SentimentSatisfiedAltIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat