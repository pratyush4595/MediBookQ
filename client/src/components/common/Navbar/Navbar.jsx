import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BsCart3, BsPersonCircle, BsSun, BsMoon } from 'react-icons/bs';
import ROUTES from '../../../constants/routes';
import './Navbar.css';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [search, setSearch] = useState('');
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <>
            <header className="container my-3">
                <div className="mbq-card rounded-4 overflow-hidden">

                    {/* ===== Main Navbar ===== */}
                    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 py-3">
                        {/* Brand */}
                        <Link to="/" className="navbar-brand brand-logo m-0">
                            <span>
                                <span className="brand-m">M</span>
                                <span className="brand-blue">ediBookQ</span>
                            </span>
                            <i className="bi bi-heart-pulse-fill heartbeat-icon"></i>
                        </Link>

                        {/* Mobile Theme Switcher */}
                        <div className="d-lg-none ms-auto me-4 theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                            <div className={`switch ${theme === 'dark' ? 'active' : ''}`}>
                                <div className="thumb">
                                    <i className={`bi ${theme === 'light' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Toggler */}
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mbqMainNav"
                            aria-controls="mbqMainNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Mobile Search */}
                        <form className="d-lg-none mt-3 mb-3 w-100 d-flex justify-content-center">
                            <div className="mbq-search">
                                <input
                                    type="search"
                                    className="form-control mbq-search-input"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                <i className="bi bi-search mbq-search-icon" aria-hidden="true"></i>
                            </div>
                        </form>

                        <div className="collapse navbar-collapse" id="mbqMainNav">
                            {/* Desktop Center Search */}
                            <form className="navbar-search mx-lg-4 ms-lg-auto me-lg-4 mb-3 mb-lg-0 w-100 d-flex justify-content-center">
                                <div className="mbq-search">
                                    <input
                                        type="search"
                                        className="form-control mbq-search-input"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                    <i className="bi bi-search mbq-search-icon" aria-hidden="true"></i>
                                </div>
                            </form>

                            {/* Right Icons */}
                            <ul className="navbar-nav flex-row ms-lg-auto align-items-center gap-3">
                                <li className="nav-item">
                                    <Link to="/profile" className="icon-btn" title="Profile">
                                        <i className="bi bi-person"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pharmacy" className="icon-btn" title="Cart">
                                        <i className="bi bi-cart3"></i>
                                    </Link>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    {/* Desktop Theme Switcher */}
                                    <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                                        <div className={`switch ${theme === 'dark' ? 'active' : ''}`}>
                                            <div className="thumb">
                                                <i className={`bi ${theme === 'light' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* thin divider (matches screenshot) */}
                    <div className="mbq-divider"></div>

                    {/* ===== Sub Navbar (Tabs) ===== */}
                    <div className="bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="mbq-subnav d-flex justify-content-around pt-4">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) => "mbq-sub-link" + (isActive ? " active" : "")}
                                >
                                    Book Appointment
                                </NavLink>

                                <NavLink
                                    to="/pharmacy"
                                    className={({ isActive }) => "mbq-sub-link" + (isActive ? " active" : "")}
                                >
                                    Medicine Order
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;