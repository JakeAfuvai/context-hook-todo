import React from "react"

const TodoItem = props => {
    return (
        <div>
            <h2>{props.todo.description}</h2>
        </div>
    )
}

export default TodoItem