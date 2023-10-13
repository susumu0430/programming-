import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("note")) || [])
  const [activeNote,setActiveNote ] =useState(false)

  useEffect(()=> {
    //ローカルストレージにノートを保存する
    localStorage.setItem("note",JSON.stringify(notes))
  }, [notes])

useEffect(() => {
  setActiveNote(notes[0].id)
},[])

  const onAddNote = () => {
    console.log("新しくノートを追加しました")
    const newNote = {
      id:uuid(),
      title:"新しいノート",
      content:"新しいノート内容",
      modDate: Date.now(),
    }
    setNotes([...notes,newNote])
    console.log(notes)
  }

  const onDeleteNote = (id) => {
    const filterNote = notes.filter((note) => note.id !== id)
    setNotes(filterNote);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    })
    setNotes(updatedNotesArray)
  }

  return (
  <div className='App'>
    <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote}
    activeNote={activeNote} setActiveNote={setActiveNote}
    />
    <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
  </div>
  )
}

export default App
