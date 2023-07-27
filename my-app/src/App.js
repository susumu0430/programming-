import { useState, useRef} from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{
    id: 1, name:"Todo1",completed: false},
  ]);

const todoNameRef = useRef();

const handleAddTodo = () => {
  //タスクを追加する
  console.log(todoNameRef);

};

  return (
  <div className="App">
    <TodoList todos={todos}/>
    <input type="text" ref={todoNameRef}/>
    <button onAbort={handleAddTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク:0</div>
  </div>
  );
}

export default App;
