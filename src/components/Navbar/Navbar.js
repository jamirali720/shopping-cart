import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-sm bg-light ">
                <div className="container-fluid ">           
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/products">Product</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart Items</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;