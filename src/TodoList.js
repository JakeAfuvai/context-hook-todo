import React, {useContext} from "react"
import {Context} from "./context"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"

const TodoList = props => {
    console.log(props)
    const context = useContext(Context)
    
    const mappedTodos = context.todos.map(todo => 
        <TodoItem 
            key={todo.id}
            todo={todo}
        />
    )

    return (
        <div>
            <AddTodo />
            <h1>To Do List</h1>
            {mappedTodos}
        </div>
    )
}

export default TodoList