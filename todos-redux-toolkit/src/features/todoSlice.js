import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            msg: 'Initial todo'
        }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                msg: action.payload
            }
            
            console.log("todos {}",state.todos.push(todo))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;