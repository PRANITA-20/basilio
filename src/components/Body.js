
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
const Body=()=>{
    
   let [restaurants, setRestaurants]= useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=()=>{
     fetch('mockData.json',{headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
     }}).then((data)=>{return data.json()}).then((jsnDat)=>{
        setRestaurants(jsnDat);}
     )
    }
    return (
        <div className="body">
          <div className="filter-container"><button className="top-rated-restaurant" onClick={()=>{
            let tempVar= restaurants.filter(ele=>{if(ele.info.avgRating>4) return ele;});
            setRestaurants(tempVar);
         }}>Top Rated Restaurants</button></div>
         <div className="restaurants-container">
            
            {   
                restaurants.map((restaurant) =>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }
         </div> 
        </div>
    )
}
export default Body;