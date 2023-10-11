// import React from 'react'
import "./Main.css"
// import {ReactMarkdown} from "react-markdown/lib/react-markdown"

const Main =({activeNote, onUpdateNote}) =>{
  
const onEditNote = (key,value) => {
  onUpdateNote({
    ...activeNote,
    [key]:value,
    modDate: Date.now(),
  })
}

if (!activeNote) {
  return <div className="no-active-note">ノートが選択されていません</div>
}

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input id="title" type="text" value={activeNote.title} onChange={(e) => onEditNote("title",e.target.value)}/>
        <textarea id="content" placeholder="ノート内容を記入"
        value={activeNote.content}
        onChange={(e) => onEditNote("content",e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  )
}

export default Main