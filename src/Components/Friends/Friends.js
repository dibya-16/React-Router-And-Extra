import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoryContext } from "../../App";
import FriendDetails from "../FriendDetails/FriendDetails";

const allProducts=[{name:"Lenovo",category:"laptop"},{name:"Asus",category:"laptop"},
{name:"Samsung",category:"mobile"},{name:"Sony",category:"camera"}]

const Friends = (props) => {//({friends})
    //const{friends}=props;
    //const {email,name}=friends;ebhabeu lekha jaay..jodi ({friends}) or const{friends}=props; jekono ekbhabe likhi
    const {email,name,id}=props.friends;
    const history= useHistory();
    const handleClick = (friendId)=>{
        const url=`/friend/${friendId}`;
        history.push(url);
    }


    const category=useContext(categoryContext);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const matchProducts=allProducts.filter(pd=>pd.category===category);
        setProducts(matchProducts);

    },[category]);//category call hole eta k call korbe..that's why [category] dise

   
 
    return (
        <div>
            <div>
                <h2>In friendzone:{category}</h2>
                {
                    products.map(pd=> <FriendDetails products={pd}></FriendDetails>)
                }
                
            </div>
            <h2>Email:{email}</h2>
            <h2>Name:{name}</h2>
            <Link to={`/friend/${id}`}>Show details of {id}</Link>
            <button onClick={()=>handleClick(id)}>CLick Me</button>
            
        </div>
    );
};

export default Friends;