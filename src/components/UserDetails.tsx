import React from 'react';

function UserDetails(props) {

    console.log(props);

    if(props.age <= 18){
        return (
            <h1>Minor</h1>
        )
    }


    return (
        <div>
            <h1>AAAAAAAAA</h1>

            <div className='row text-7xl bg-red-500'>
                {props.children}
            </div>

        </div>
    );
}

export default UserDetails;