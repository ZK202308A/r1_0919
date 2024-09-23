import {IPageResponse} from "../../types/todo.ts";
import {ReactElement} from "react";

interface Props {
    pageResponse:IPageResponse,
    changePage:(p:number) => void;
}

const makeArr = (from:number, to:number, prev:boolean, next:boolean): number[] => {

    let arr:number[] = []

    if(prev){
        arr.push(from -1)
    }

    for (let i = from; i <= to ; i++) {
        arr.push(i)
    }



    return arr
}

function PageComponent({pageResponse, changePage}: Props): ReactElement {

    const current: number = pageResponse.number + 1
    //  (1/10.0) => 0.1 => 1 * 10 => 20
    const tempLast:number = Math.ceil(current/10.0) * 10
    const startPage: number = tempLast - 9
    const endPage: number  = pageResponse.totalPages < tempLast ? pageResponse.totalPages : tempLast;
    //const prev:boolean = startPage !== 1


    const pageNums:number[] = makeArr(startPage,endPage, false, false)

    const lis = pageNums.map( num => <li
        className='px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        key={num}
        onClick={() => changePage(num)}
    >
        {num}
    </li>)


    return (
        <div>
            <ul className='flex justify-center items-center space-x-2 mt-6'>
                {lis}
            </ul>
        </div>
    );
}

export default PageComponent;