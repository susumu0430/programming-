import React from 'react'
import "./Rightbar.css"
import { Users } from"../../dummyData"
import Online from '../online/Online'


export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt=""  className='starImg'/>
          <span className='eventText'><b>フォロワー限定</b>イベント開催中</span>
        </div>
        <img src="assets/event.jpeg" alt=""  className='eventImg'/>
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id}/>
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src="assets/promotion/promotion1.jpeg" alt=""  className='rightbarPromotionImg'/>
        <p className='promotionName'>ショッピング</p>
        <img src="assets/promotion/promotion2.jpeg" alt=""  className='rightbarPromotionImg'/>
        <p className='promotionName'>カーショップ</p>
        <img src="assets/promotion/promotion3.jpeg" alt=""  className='rightbarPromotionImg'/>
        <p className='promotionName'>株式会社</p>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>ユーザー情報</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">出身 : </span>
        <span className="rightbarInfoKey">秋田</span>
      </div>
      <h4 className='rightbarTitle'>あなたの友達</h4>
      <div className='rightbarFollowings'>
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className="rightbarFollowingName">Shin</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className="rightbarFollowingName">Tanaka</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className="rightbarFollowingName">Takeda</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className="rightbarFollowingName">yamada</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className="rightbarFollowingName">koga</span>
        </div>
      </div>
      </div>  
      </>
    )
  }

  return (
    <div className='rightbar'>
    <div className='rightbarWrapper'>
      {profile ? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
   </div>
  )
}
