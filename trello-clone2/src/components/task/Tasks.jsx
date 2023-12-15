import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (taskList, startIndex, endIndex) => {
     //タスクを並び変える
     const remove = taskList.splice(startIndex.index,1)
     taskList.splice(endIndex,0,remove[0])
}

export const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (result) => {
    //タスクを並び変える
  const remove = taskList.splice(result.source.index,1)
  taskList.splice(result.destination.index,0,remove[0])

  reorder(taskList,result.source.index,result.destination.index)

  setTaskList(setTaskList)
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => 
        <div {...provided.droppableProps} ref={provided.innerRef}>
            {taskList.map((task, index) => (
        <div key={task.id}>
          <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
        </div>
      ))}
      {provided.placeholder}
        </div>}
      </Droppable>
      </DragDropContext>
    </div>
  )
}
