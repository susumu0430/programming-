import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header>
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="blog">ブログ</Link>
                </li>
                <li>
                    <a href="#">SNS</a>
                </li>
            </ul>
        </nav>
       </header>
    </div>
  )
}

export default Header