import  {ReactElement} from 'react';
import {CountNum} from "../types/count.ts";

function CountDisplay({num}: CountNum):ReactElement {

    console.log()

    return (
        <div>
            <h1>{num}</h1>
        </div>
    );
}

export default CountDisplay;