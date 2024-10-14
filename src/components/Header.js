import logo from '../utils/app_logo.png';
import {useState} from 'react';
const Header=()=>{
    const [loginBtn, setLoginBtn]=useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="log" src={logo}/>
            </div>
            <div class="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
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