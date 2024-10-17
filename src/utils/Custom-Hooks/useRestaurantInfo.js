import { useEffect, useState } from "react";
const useRestaurantInfo = (resId)=>{
    const [restaurantSelected, setRestaurantSelected] = useState(null);
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
     return restaurantSelected;
}
export default useRestaurantInfo;