import React, { useState } from "react";
import Todo from "../components/todo";

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}


export const TodoContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
});

const TodContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    // const todo = [new Todo("Learn React"), new Todo("Learn TypeSsript")]

    const addHandler = (todoText: string) => {

        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })

    }

    const removeTodo = (todoId: string) => {
        setTodos((prevTodos) => (
            prevTodos.filter((item) => item.id !== todoId)
        ))
    }

    const contextObj: TodoContextObj = {
        items: todos,
        addTodo: addHandler,
        removeTodo: removeTodo,
    }
    return <TodoContext.Provider value={contextObj}>
        {props.children}
    </TodoContext.Provider>

}

export default TodContextProvider;