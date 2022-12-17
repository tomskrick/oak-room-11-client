import React from 'react';
import { FaFacebook, FaSearch, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import mainIcons from '../../../assest/assest/logo (2).png'
const Header = () => {

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
    </>

    return (
        <div className="navbar h-20 text-cyan-50 bg-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-14' src={mainIcons} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end flex">
                <button className="btn btn-outline btn-warning me-5">Buy Now</button>
            </div>
        </div>
    );
};

export default Header;