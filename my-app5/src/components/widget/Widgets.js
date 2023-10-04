import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

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
        </div>
    </div>
  )
}

export default Widgets