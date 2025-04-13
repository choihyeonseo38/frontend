// TodoList.tsx

import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoList: React.FC = () => {
  const title: string = '오늘 할일';

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '정보처리기사 공부하기', isChecked: false },
    { id: 2, text: '타입스크립트 공부하기', isChecked: false },
    { id: 3, text: '리액트 공부하기', isChecked: false }
  ]);
  const [newTodos, setNewTodos] = useState<string>('');

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  //항목체크하기
  const handleCheckedChange = (id: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    )
  }
//항목추가하기
  const addTodo = () => {
    if (newTodos.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodos, isChecked: false }]);
      setNewTodos('');
    }
  }

  //항목삭제하기
  const removeTodo = (id : number) => {
    setTodos(todos.filter((todo)=>todo.id !==id))
  }
//
  const handleTodoClick = (todo : Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  }

  const handleClose = () => {
    setShowDetail(false);
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일을 입력하세요."
            style={{
            marginRight: '10px',
            writingMode: 'horizontal-tb'
            }}
            onChange={(e)=>  setNewTodos(e.target.value)}
          />
           
          <Button variant="warning" onClick={addTodo}>추가</Button>

        </div>

        <div className="board">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isChecked}
                  onChange={() => handleCheckedChange(todo.id)}
                />
                <span onChange={() => handleTodoClick(todo)}>
                  {todo.isChecked
                    ? <del>{todo.text}</del>
                    : <span>{todo.text}</span>}
                </span>
                <button
                onClick={()=>
                   removeTodo(todo.id)}
                className='del'
                >삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
