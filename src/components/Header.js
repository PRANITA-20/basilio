import logo from '../utils/app_logo.png';

const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}
export default Header;