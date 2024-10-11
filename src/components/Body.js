
import RestaurantCard from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import {useState, useEffect} from "react";
const Body=()=>{
    
   let [restaurants, setRestaurants]= useState([]);
   let [allRestaurants, setAllRestaurants]= useState([]);
   let [showTopRes, setShowTopRes] = useState(true);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=()=>{
     fetch('mockData.json',{headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
     }}).then((data)=>{return data.json()}).then((jsnDat)=>{
        setRestaurants(jsnDat);
        setAllRestaurants(jsnDat);
      }
     )
    }
    const toggle = ()=>{
      setShowTopRes(!showTopRes);
      if(showTopRes){
         let tempVar= restaurants.filter(ele=>{if(ele.info.avgRating>4) return ele;});
         setRestaurants(tempVar);
      }else{
         setRestaurants(allRestaurants);
      }
    }
    if(restaurants.length===0){
      return <Shimmer/>
    }
    if(restaurants.length!==0){
    return (
        <div className="body">
          <div className="filter-container"><button className="top-rated-restaurant" onClick={()=>{
          toggle();
         }}>Top Rated Restaurants</button></div>
         <div className="restaurants-container">
            
            {   
                restaurants.map((restaurant) =>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }
         </div> 
        </div>
    )}
}
export default Body;