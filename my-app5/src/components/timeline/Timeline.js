import React from 'react'
import"./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'


function Timeline() {
  return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline_header'>
        <h2>ホーム</h2>
        </div>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        <Post
        displayName= "プログラミング"
        username="Shin_Engineer"
        verified={true}
        text="初めてのツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random" />
    </div>
  )
}

export default Timeline