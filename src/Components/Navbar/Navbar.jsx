import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-header_bg'>
        <div className="navbar w-full max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><ActiveLink to='/'>Home</ActiveLink></li>
                    <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                    <li><ActiveLink to='/appliedJob'>Applied Jobs</ActiveLink></li>
                    <li><ActiveLink to='/blog'>Blog</ActiveLink></li>

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-black font-manrope font-extrabold">TalentFinder</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><ActiveLink to='/'>Home</ActiveLink></li>
                    <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                    <li><ActiveLink to='/appliedJob'>Applied Jobs</ActiveLink></li>
                    <li><ActiveLink to='/blogs'>Blog</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-btn_bg border-0">Start Applying</a>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;