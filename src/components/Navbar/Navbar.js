import React, {useState} from 'react';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navbarItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Services',
            path: '/services',
        },
        {
            name: 'Blogs',
            path: '/blogs',
        },
        {
            name: 'Contact Us',
            path: '/contact',
        }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle => 
                                    {
                                        if (navSingle.name === 'Services') {
                                            return (
                                            // <li className="nav-item">
                                            //     <Link className="nav-link" onClick={toggleDropdown}>Services</Link>
                                            //     {isDropdownOpen && (
                                            //         <ul className='dropdown-menu show'>
                                            //         <li>Root Canal Treatment</li>
                                            //         <li>Implants</li>
                                            //         <li>Crown & Bridges</li>
                                            //         <li>Whitening</li>
                                            //         <li>Braces & Invisalign</li>
                                            //         <li>Smile Design</li>
                                            //         <li>Dentures</li>
                                            //         <li>Kids Dentistry</li>
                                            //         </ul>
                                            //     )}
                                            // </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                            </li>
                                            );    
                                        }   else {
                                        return (
                                            <li className="nav-item">
                                                <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                            </li>
                                        );
                                        }
                                    }
                                )
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <Link to="/contact">Book appointment</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;