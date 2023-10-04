import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import"./Widget.css"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
            <Search className='widgets_searchIcon'/>
            <input placeholder='キーワード検索' type='text'/>
        </div>

        <div className='widgets_widgetContainer'>
          <h2>今どうしてる？</h2>

          {/* ライブラリを追加 ・ 追記 */}
          <TwitterTweetEmbed tweetId={'1706496310587670738'}/>

          <TwitterTimelineEmbed sourceType='profile' screenName='Shin_Engineer' options={{height: 400}}/>
          <TwitterShareButton url={"https://twitter.com/Shin_Engineer"}
          options={{text:"#React.js勉強", via: "Shin_Engineer"}}
          />
        </div>
    </div>
  )
}

export default Widgets