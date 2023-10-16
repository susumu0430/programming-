import React from 'react'
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>

    {/* sidebarLeft */}
    <div className='sidebarLeft'>
      <div className='serverIcon'>
        <img src="./logo192.png" alt="" />
      </div>
      <div className='serverIcon'>
        <img src="./logo192.png" alt="" />
      </div>
    </div>

    {/* sidebarRight */}
    <div className='sidebarRight'></div>
    <div className='sidebarTop'>
      <h3>Discord</h3>
    </div>
    </div>
  )
}

export default Sidebar