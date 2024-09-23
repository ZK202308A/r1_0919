import {ReactElement, useEffect, useState} from "react";
import {IPageResponse, ITodo} from "../../types/todo.ts";
import {getTodoList} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";

const initialState: IPageResponse = {
    content: [],
    first: false,
    last: false,
    number: 0,
    size: 0,
    totalElements: 0
}

function TodoList():ReactElement {

    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)
    const [pageData, setPageData] = useState<IPageResponse>(initialState)

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        getTodoList(page).then(data => {
            console.log(data)
            setPageData(data)
            setTimeout(()=> {
                setLoading(false)
            }, 1000)
        })

    },[page,refresh])


    const todoLI = pageData?.content?.map( (todo:ITodo) => {
        return (
            <li key={todo.mno}>
                {todo.title} -
                {todo.writer} -
                {todo.dueDate}
            </li>
        )
    })



    return (
        <div>
            <div>Todo List</div>
            {loading && <LoadingComponent/>}
            <ul>
                {todoLI}
            </ul>
        </div>
    );
}

export default TodoList;