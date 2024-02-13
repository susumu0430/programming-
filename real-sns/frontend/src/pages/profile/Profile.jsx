import React from 'react'
import "./Profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Rightbar from '../../components/rightbar/Rightbar'


export default function Profile() {
  return (
    <>
    < Topbar />
    <div className='profile'>
    < Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src="assets/post/3.jpeg" alt="" className="profileCoverImg"/>
                <img src="assets/person/1.jpeg" alt="" className='profileUserImg'/>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>shin</h4>
                <span className='profileInfoDesc'>美食家</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <TimeLine />
        <Rightbar profile/>
        </div>
    </div>
    </div>
    </>
  )
}
