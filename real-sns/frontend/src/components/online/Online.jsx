import React from 'react'

export default function Online({user}) {
  return (
    <li className='rughtbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className='rightbarProfileImg'/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
