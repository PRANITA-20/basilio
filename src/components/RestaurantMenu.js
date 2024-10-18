import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurantInfo from "../utils/Custom-Hooks/useRestaurantInfo";

const RestaurantMenu = ()=>{
    const {resId} = useParams();

    const resInfo = useRestaurantInfo(resId);

if(!resInfo){
    return <Shimmer/>
}
return (
    <>
    <div className="restaurantMenu space-between px-24 max-width-1320 flex">
        <div className="breadcrumbs">
            <ul className="breadcrumbs-list list-style-none flex">
                <li><Link className="text-color-decoration" to='/'>Home</Link></li>
                <li className="breadcrumbs-separator">/</li>
                <li><Link className="text-color-decoration" to={'/restaurants/'+resInfo.id}>{resInfo.name}</Link></li>
            </ul>
        </div>
    </div>
    </>
)
}

export default RestaurantMenu;