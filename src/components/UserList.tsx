import React from 'react';
import UserDetails from "./UserDetails.tsx";
import MyHello from "./MyHello.tsx";

function UserList(props) {

    const arr = [
        {mid:'user1', mpw: '1111', mname:'Hong Gil Dong', age: 14}
    ]

    const show = (user) => {
        console.log(user.mid +" " + user.mpw + " " + user.mname);
    }

    const target = arr[0]


    return (
        <div className="bg-amber-700 text-xs">
            <h1 className='text-7xl'>User List</h1>
            <UserDetails {...target} showUser={show}>
                <MyHello></MyHello>
            </UserDetails>

        </div>
    );
}

export default UserList;