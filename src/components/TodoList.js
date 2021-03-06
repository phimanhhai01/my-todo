import React from 'react';
//Import Components
import Todo from './Todo'
const TodoList = ({ todos, setTodos, filteredTodos }) => {
    //Events
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        text={todo.text} 
                        key={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;