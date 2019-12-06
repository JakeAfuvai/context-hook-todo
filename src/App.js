import React from "react"
import Navbar from "./Navbar"
import TodoList from "./TodoList"

const App = props => {
    return (
        <div>
            <Navbar />
            <TodoList />
        </div>
    )
}

export default App