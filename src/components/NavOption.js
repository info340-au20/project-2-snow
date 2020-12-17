// React
import { NavLink, useLocation } from 'react-router-dom';

export function NavOption() {
    const { pathname } = useLocation();

    return (
        <div className="collapse navbar-collapse navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className='nav-item'> 
            
            {/* reload the page w/out refresh */}
            <NavLink className="nav-link"
                to="/index.html" activeClassName={"activeLink active"}
                    isActive={() => ['/', '/index.html'].includes(pathname)} >
                    Dashboard 
            </NavLink> 
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName={"activeLink active"}>About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/signIn" activeClassName={"activeLink active"}>Profile</NavLink>
            </li>
        </ul>
        </div>
    )
}
