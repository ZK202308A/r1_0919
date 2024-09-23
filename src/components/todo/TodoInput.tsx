import {ITodo} from "../../types/todo.ts";
import {ChangeEvent, useState} from "react";
import {postTodo} from "../../api/todoAPI.ts";


const initState:ITodo ={
    title:'',
    writer:'',
    dueDate:'',
}


function TodoInput() {

    const [todo, setTodo] = useState<ITodo>(initState)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const handleClick = () => {

        postTodo(todo).then(number => {
            alert(number)
        })

    }


    return (
        <div className="flex flex-col space-y-4 w-96 mx-auto">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700">Title</label>
            <input
                type="text"
                name="title"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.title}
                onChange={e => handleChange(e)}
            />

            <label htmlFor="writer" className="text-sm font-semibold text-gray-700">Writer</label>
            <input
                type="text"
                name="writer"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Writer"
                value={todo.writer}
                onChange={e => handleChange(e)}
            />
            <label htmlFor="dueDate" className="text-sm font-semibold text-gray-700">DueDate</label>
            <input
                type="date"
                name="dueDate"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Date"
                value={todo.dueDate}
                onChange={e => handleChange(e)}
            />

            <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    );
}

export default TodoInput;