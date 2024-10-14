import logo from '../utils/app_logo.png';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>{
    const [loginBtn, setLoginBtn]=useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="log" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus">Contact Us</NavLink>
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                       <div className='logout' onClick={()=>{
                       loginBtn==='Login'? setLoginBtn('Logout'):setLoginBtn('Login');
                       }}>{loginBtn}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;