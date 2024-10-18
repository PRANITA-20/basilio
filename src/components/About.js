import { useEffect, useState } from "react";
import CompanyClass from "./CompanyClass";
import {ShimmerForAbout} from "./ShimmerForAbout";
const About=()=>{
    const [about,setAbout]= useState({});
    useEffect(()=>{
     fetch('/companyDetails.json',{
        headers:{
            'Content-type':'application/json',
            'Accept' : 'application/json'
        }
     }).then(data=>{return data.json()}).then((jsnData)=>{
        setAbout(jsnData[0]);
     })




    },[]);
    if(!about){
        return <ShimmerForAbout/>
    }
    return (
        <div className="About margin-auto max-width-1320 font-family-Gilroy font-24">
            <h1>About Us</h1>
            <CompanyClass companydetail={about}/>
        </div>
    )
}
export default About;