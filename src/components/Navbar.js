import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import l from '../2.png';


const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <img src={l} alt="" className='pro1' />
                <Link className="navbar-brand" to="/">Movie and Series App</Link>
                
                
                
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    
                    <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round" onClick={toggleDarkMode}></span>
  
</label>
                
            </div>
        </nav>
    );
};

export default Navbar;
