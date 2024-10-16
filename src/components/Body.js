
import useOnlineStatus from "../utils/Custom-Hooks/useOnlineStatus";
import RestaurantCard, {PromotedRestaurantCard} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Body=()=>{
    // whenever there is a change in state variable, react re-renders the component/ react triggers the reconcialation
   let [restaurants, setRestaurants]= useState([]);
   let [filteredRestaurants, setfilteredRestaurants]= useState([]);
   let [showTopRes, setShowTopRes] = useState(true);
   let [searchText, setSearchText] =useState("");
   let [sortedRes, setSortedRes] = useState([]);
   const PromotedRes = PromotedRestaurantCard(RestaurantCard)
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
        setSortedRes(jsnDat);
      }
     )
    }
    const sortRestaurants = (e) =>{
   let selectedValue=e.target.value;
   let sortedResCopy = [...sortedRes]
   if(selectedValue==='alphabetical'){
     
      sortedResCopy.sort((a,b)=>{
         return a.info.name.localeCompare(b.info.name);
      });
      setfilteredRestaurants(sortedResCopy);
    }
    if(selectedValue==='highToLow'){
      sortedResCopy.sort((a,b)=>{
        return Number(b.info.costForTwo.slice(1,4)) - Number(a.info.costForTwo.slice(1,4))
       });
    setfilteredRestaurants(sortedResCopy);
}
if(selectedValue==='lowToHigh'){
   sortedResCopy.sort((a,b)=>{
     return Number(a.info.costForTwo.slice(1,4)) - Number(b.info.costForTwo.slice(1,4))
    });
 setfilteredRestaurants(sortedResCopy);
}
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
    const networkStatus = useOnlineStatus();
    if(!networkStatus){
      return (<h3 className="offline-message font-24 margin-auto max-width-1320 font-family-Gilroy">Looks like you are offline. Please check your network connectivity!</h3>)
    }
    if(restaurants.length===0){
       return <Shimmer/>
    }
    if(restaurants.length!==0){
    return (
        <div className="body">
         <div className="filters space-between px-24 max-width-1320 flex">
            <div className="flex">
         <div><button className="top-rated-restaurant" onClick={()=>{
          toggle();
         }}>Top Rated Restaurants</button></div>
          <div className="sort-res"><select className="sort-dropdown" onChange={(e)=>{
            sortRestaurants(e);
          }} id="sort-dropdown"><option defaultValue value="">Select Sorting Options</option><option value="lowToHigh">Cost for two: Low to High</option>
          <option value="highToLow">Cost for two: High to Low</option>
          <option value="alphabetical">Alphabetical(A-Z)</option></select></div>
          </div>
         <div>
         <input type="text" value={searchText} className="searchInput" onKeyDown={(e)=>{
           if(e.key==='Enter'){
            searchTheTerm();
           }
         }} onChange={(e)=>{setSearchText(e.target.value)}}></input>
         <button type="button" className="searchInput"  onClick={()=>{
          searchTheTerm();
         }}>Search</button>
         </div>
         </div>
        
         <div className="restaurants-container align-items-start px-24 list-style-none margin-auto max-width-1320 grid">
            
            {   
                filteredRestaurants.length===0 ? (<div className="no-search-results font-24 font-family-Gilroy">No such results found</div>):
                filteredRestaurants.map((restaurant) =>(<Link className="res-menu text-color-decoration" to={'restaurants/'+restaurant.info.id}>{
                  restaurant.info.promoted ? <PromotedRes resData={restaurant}/> :<RestaurantCard key={restaurant.info.id} resData={restaurant}/>}</Link>))
            }
         </div> 
        </div>
    )}
}
export default Body;