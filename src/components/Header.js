import logo from '../utils/app_logo.png';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>{
    const [loginBtn, setLoginBtn]=useState('Login');
    const AuthenticateUser=()=>{
        if(loginBtn==='Logout'){
            
        }
    }
    return (
        <div className="header space-between flex margin-auto max-width-1320">
            <div className="logo-container">
                <img className="log" src={logo}/>
            </div>
            <div className="nav-items align-items-center space-around flex font-family-Gilroy">
                <ul className='flex font-24 list-style-none'>
                    <li>
                        <NavLink className="text-color-decoration" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-color-decoration" to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-color-decoration" to="/contactus">Contact Us</NavLink>
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                        <NavLink className="text-color-decoration" to="/instamart">Instamart</NavLink>
                    </li>
                    <li>
                       <div className='logout' onClick={()=>{
                       loginBtn==='Login'? setLoginBtn('Logout'):setLoginBtn('Login');
                       AuthenticateUser();
                       }}>{loginBtn}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;