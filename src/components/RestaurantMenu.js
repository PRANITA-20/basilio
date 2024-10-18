import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useRestaurantInfo from "../utils/Custom-Hooks/useRestaurantInfo";

const RestaurantMenu = ()=>{
    const {resId} = useParams();

    const resInfo1 = useRestaurantInfo(resId);
    const resInfo=resInfo1.restaurantSelected;
    const marginTop = {
        "marginTop": "-2px"
    }
    const marginBottom={
        "marginBottom": "15px"
    }
    const containerWidth={
        "width": "max-content",
        "padding": "4px 0"
    }
  console.log(resInfo)
if(!resInfo){
    return <Shimmer/>
}
return (
    <>
    <div className="restaurantMenu max-width-768 flex-direction-col space-between px-24 flex">
        <div className="breadcrumbs">
            <ul className="breadcrumbs-list list-style-none flex">
                <li><Link className="text-color-decoration" to='/'>Home</Link></li>
                <li className="breadcrumbs-separator">/</li>
                <li><Link className="text-color-decoration" to={'/restaurants/'+resInfo.id}>{resInfo.name}</Link></li>
            </ul>
        </div>
        <div style={marginBottom} className="restaurant-name font-family-Gilroy font-24">
            {resInfo.name}
        </div>
        <div className="restaurantMenu-card">
            <div className="flex font-16 font-family-Gilroy font-weight">
        <div className="green-star-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg></div>
        <div className="rating">{resInfo.avgRating}{resInfo.noOfRatings} ratings</div><div style={marginTop} className="font-weight mx-8">.</div><div>{resInfo.costForTwo}</div>
        </div>
        <div className="restaurantMenu-cuisines">
            {resInfo.cuisines.join(',')}
        </div>
        <div className="flex mt-20">
        <div style={containerWidth} className="flex flex-direction-col align-items-center">
               <div className="starting-point"></div>
               <div className="mid-point"></div>
               <div className="ending-point"></div>
        </div>
        <div className="outlet-details ml-12">
            <div className="outlet-location font-weight font-family-Gilroy font-14">{resInfo.areaName}</div>
            <div className="font-weight font-family-Gilroy font-14">{resInfo.deliveryTime}</div>
        </div>
        </div>
        </div>
    </div>
    </>
)
}

export default RestaurantMenu;