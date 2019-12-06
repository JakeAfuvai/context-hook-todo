import React, {useState, useContext} from "react"
import {Context} from "./context"

import uuid from 'uuid'

const AddTodo = props => {
    const context = useContext(Context)
    const [todo, setTodo] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const newTodo = {
            id: uuid.v4(),
            description: todo,
            completed: false
        }
        context.addTodo(newTodo)
        setTodo("")
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text"
                value={todo}
                placeholder="Enter task..."
                onChange={e => setTodo(e.target.value)}
            />
            <button>+</button>
        </form>
    )
}

export default AddTodo