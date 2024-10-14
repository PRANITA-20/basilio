
import RestaurantCard from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import {useState, useEffect} from "react";
const Body=()=>{
    // whenever there is a change in state variable, react re-renders the component/ react triggers the reconcialation
   let [restaurants, setRestaurants]= useState([]);
   let [filteredRestaurants, setfilteredRestaurants]= useState([]);
   let [showTopRes, setShowTopRes] = useState(true);
   let [searchText, setSearchText] =useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=()=>{
     fetch('mockData.json',{headers:{
        'Content-type': 'application/json',
        'Accept':'application/json'
     }}).then((data)=>{return data.json()}).then((jsnDat)=>{
        setRestaurants(jsnDat);
        setfilteredRestaurants(jsnDat);
      }
     )
    }
    const  searchTheTerm = ()=>{
      let tempSearch = restaurants.filter(ele => ele.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setfilteredRestaurants(tempSearch);
    }
    const toggle = ()=>{
      setShowTopRes(!showTopRes);
      if(showTopRes){
         let tempVar= restaurants.filter(ele=>{if(ele.info.avgRating>4) return ele;});
         setfilteredRestaurants(tempVar);
      }else{
         setfilteredRestaurants(restaurants);
      }
    }
    if(restaurants.length===0){
      return <Shimmer/>
    }
    if(restaurants.length!==0){
    return (
        <div className="body">
         <div className="filters">
         <div><button className="top-rated-restaurant" onClick={()=>{
          toggle();
         }}>Top Rated Restaurants</button></div>
         <div>
         <input type="text" value={searchText} onKeyDown={(e)=>{
           if(e.key==='Enter'){
            searchTheTerm();
           }
         }} onChange={(e)=>{setSearchText(e.target.value)}}></input>
         <button type="button"  onClick={()=>{
          searchTheTerm();
         }}>Search</button>
         </div>
         </div>
        
         <div className="restaurants-container">
            
            {   
                filteredRestaurants.length===0 ? (<div className="no-search-results">No such results found</div>):
                filteredRestaurants.map((restaurant) =>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }
         </div> 
        </div>
    )}
}
export default Body;