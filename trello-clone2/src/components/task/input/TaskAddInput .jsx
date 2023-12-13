import React from 'react'

export const TaskAddInput  = ({
  inputText,
  setInputText,
  setTaskList,
  tasList
}) => {

const handleSubmit = (e) => {
  e.preventDefault()
  /* カードを追加する */
  setTaskList([...tasList,
  {
    text: inputText,
  }
])
}

const handleChange = (e) => {
  setInputText(e.target.value)
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' className='taskAddInput'onChange={handleChange}/>
      </form>
    </div>
  )
}
