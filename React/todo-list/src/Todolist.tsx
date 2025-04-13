import React, { useState } from 'react'

const TodoList : React.FC = () =>
{
    const title : string = '오늘 할일';


    //구조분해할당
    const[todos, setTodos] = useState<string[]>(['청소하기', '운동하기', '공부하기']);

return (
    <div>
        <h1>{title}</h1>
        <p></p>
        <div className='container'>
        <ul>
            <li>{todos[0]}</li>
            <li>{todos[1]}</li>
            <li>{todos[2]}</li>
        </ul>
        </div>
    </div>


)
}

export default TodoList