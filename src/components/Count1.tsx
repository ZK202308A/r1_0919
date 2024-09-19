import {ReactElement, useState} from 'react';
import CountButtons from "./CountButtons.tsx";
import CountDisplay from "./CountDisplay.tsx";
import {CountNum} from "../types/count.ts";




function Count1():ReactElement {

    console.log("Count1..................")

    const [count, setCount] = useState<CountNum>({num: 1});

    const changeNum = (): void => {

        setCount({num: count.num + 1});

    }

    return (
        <div className="border-2 w-1/2 h-1/4 bg-amber-200 justify-center flex m-3 p-3">

            <CountDisplay num={count.num}></CountDisplay>

            <CountButtons fn={changeNum}></CountButtons>
        </div>
    );
}

export default Count1;