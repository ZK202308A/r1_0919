import {ReactElement, useEffect,  useState} from "react";
import {IPageResponse, ITodo} from "../../types/todo.ts";
import {getTodoList} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";

const initialState: IPageResponse = {
    content: [],
    first: false,
    last: false,
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0
}

interface TodoListProps {
    pageNum:number,
    refresh:boolean,
    changePage:(p:number) => void;
}

function TodoList({pageNum, refresh, changePage}:TodoListProps):ReactElement {

    const [pageData, setPageData] = useState<IPageResponse>(initialState)

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        console.log("useEffect.........." + pageNum)

        setLoading(true)

        getTodoList(pageNum).then(data => {
            console.log(data)
            setPageData(data)
            setTimeout(()=> {
                setLoading(false)
            }, 600)
        })

    },[pageNum,refresh])


    const todoLI = pageData?.content?.map( (todo:ITodo) => {
        return (
            <li key={todo.mno}>
                {todo.mno} -
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

            <div>
                <PageComponent pageResponse={pageData} changePage={changePage}></PageComponent>
            </div>

        </div>
    );
}

export default TodoList;