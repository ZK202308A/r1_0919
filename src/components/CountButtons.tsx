import {ReactElement} from "react";

interface Props {
    fn: () => void;
}

function CountButtons(props:Props):ReactElement {

    console.log(props);

    return (
        <div>
            <button onClick={props.fn} >INC</button>
        </div>
    );
}

export default CountButtons;