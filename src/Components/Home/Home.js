import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setFriends(data))

    },
        []);

        const [category,setCategory]=useContext(categoryContext);//create context paite use COntext use korte hoy
    return (
        <div>
            <div>
             <h2>This is header:{category}</h2>
             <button onClick={()=>setCategory('laptop')}>laptop</button>
             <button onClick={()=>setCategory('camera')}>camera</button>


            </div>
            <h2>Friends:{friends.length}</h2>
            {

                friends.map( frnd=> <Friends friends={frnd}></Friends>)
            }
        </div>
    );
};

export default Home;