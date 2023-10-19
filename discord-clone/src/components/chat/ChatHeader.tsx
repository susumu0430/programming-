import React from 'react'
import "./ChatHeader.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
        <div className='chatHeaderLeft'>
            <h3>
                <span className='chatHeaderHash'>#</span>
                Udemy
            </h3>
        </div>
        <div className='chatHeaderRight'>
            <NotificationsIcon />
            <PushPinIcon />
            <PeopleAltIcon />
            <div className='chatHeaderSearch'>
                <input type="text" placeholder='検索'/>
                <SearchIcon />
            </div>
            <SendIcon />
            <HelpCenterIcon />
        </div>
    </div>
  )
}

export default ChatHeader