import React from "react";
import { Link, NavLink } from "react-router-dom";

let Header = () => {
    return (
        <header className="app-header">
            <NavLink 
                className={({isActive}) =>{
                    return isActive ? "route-link active-link app-icon"
                             : "route-link app-icon";
                    }
                } 
                to="/"
            >
                <h1>#VANLIFE</h1>
            </NavLink>
            <nav className="top-right-nav">
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    } 
                    to="/host"
                >
                    <p>Host</p>
                </NavLink>
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    } 
                    to="/about"
                >
                    <p>About</p>
                </NavLink>
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    }
                    to="/van"
                >
                    <p>Van</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
