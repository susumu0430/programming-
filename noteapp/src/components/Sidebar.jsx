// import React from 'react'
import "./Sidebar.css"

const Sidebar = ({onAddNote, notes}) => {
  return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>ノート</h1>
            <button onClick={onAddNote}>追加</button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => (
            //     <div className="app-sidebar-note">
            //     <div className="app-sidebar-note-title">
            //         <strong>タイトル</strong>
            //         <button>削除</button>
            //     </div>
            //     <p>ノートの内容です</p>
            //     <small>最後の修正日:xx</small>
            // </div>
            ))}
            <div className="app-sidebar-note">
                <div className="app-sidebar-note-title">
                    <strong>タイトル</strong>
                    <button>削除</button>
                </div>
                <p>ノートの内容です</p>
                <small>最後の修正日:xx</small>
            </div>
        </div>
    </div>
  )
}

export default Sidebar