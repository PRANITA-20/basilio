import { useEffect, useState } from "react";
const useRestaurantInfo = (resId)=>{
    const [restaurantSelected, setRestaurantSelected] = useState(null);
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    let selectedRestaurant=[];
    useEffect(()=>{
        fetch('/mockData.json',{headers:{
            'Content-type': 'application/json',
            'Accept':'application/json'
         }}).then((data)=>{return data.json()}).then((jsnDat)=>{
          selectedRestaurant = jsnDat.filter(ele =>Number(ele.info.id) === Number(resId));  
        setRestaurantSelected(selectedRestaurant[0].info);
        setRestaurantDetails(jsnDat);
            }
         )
     },[])
     return {restaurantSelected,restaurantDetails};
}
export default useRestaurantInfo;