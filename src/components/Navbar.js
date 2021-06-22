import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div>
                <ul className="navbar">
                    <li className="navbar-item"><NavLink to="/create" className="navbar-item-inside">Create</NavLink></li>
                    <li className="navbar-item"><NavLink to="/links" className="navbar-item-inside">Links</NavLink></li>
                    <li className="navbar-item navbar-logout"><a href="/" onClick={logoutHandler} className="navbar-item-inside">Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}