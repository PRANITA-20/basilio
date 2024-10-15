import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [restaurantSelected, setRestaurantSelected] = useState({});
    let selectedRestaurant=[];
 useEffect(()=>{
    fetch('/mockData.json',{headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
     }}).then((data)=>{return data.json()}).then((jsnDat)=>{
      selectedRestaurant = jsnDat.filter(ele =>Number(ele.info.id) === Number(resId));  
      setRestaurantSelected(selectedRestaurant[0].info);
        }
     )
 },[])

if(!restaurantSelected){
    return <Shimmer/>
}
return (
    <>
    <div className="restaurantMenu">
        <div className="breadcrumbs">
            <ul className="breadcrumbs-list">
                <li><Link to='/'>Home</Link></li>
                <li className="breadcrumbs-separator">/</li>
                <li><Link to={'/restaurants/'+restaurantSelected.id}>{restaurantSelected.name}</Link></li>
            </ul>
        </div>
    </div>
    </>
)
}

export default RestaurantMenu;