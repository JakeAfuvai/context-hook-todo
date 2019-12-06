import React, {useState} from "react"
const Context = React.createContext()

const ContextProvider = props => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos(prevTodos => [...prevTodos, todo])
    }

    return (
        <Context.Provider value={{todos, addTodo}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}