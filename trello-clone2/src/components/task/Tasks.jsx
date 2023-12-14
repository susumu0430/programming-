import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const Tasks = ({taskList, setTaskList}) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId='droppable'>
          {(provided) => 
        <div {...provided.droppableProps} ref={provided.innerRef}>
            {taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} taskList={taskList} setTaskList={setTaskList}/>
        </div>
      ))}
      {provided.placeholder}
        </div>}
      </Droppable>
      </DragDropContext>
    </div>
  )
}
