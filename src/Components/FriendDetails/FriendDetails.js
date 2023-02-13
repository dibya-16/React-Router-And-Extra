import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = (props) => {
    const {friendId}=useParams();//url theke kono info newar jonno amra useparams use kori.friendId url er variable declare korsi
    const [frnd,setFrnd]= useState({});//() er vitor second braket cz object pass korbo
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setFrnd(data))
    }

    ,[]);
    const {name}=props.products;

    return (
        <div>
            <div>
                <h2>FriendsDetail Category:{name}</h2>
            </div>
         <h2>Friend Id:{friendId}</h2>
         <h2>Name:{frnd.name}</h2>
            
        </div>
    );
};

export default FriendDetails;
