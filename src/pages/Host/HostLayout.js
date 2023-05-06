import React from "react";
import { NavLink, Outlet } from "react-router-dom";

let Host = () => {

    return (
        <div className="main-body host">
            <nav className="host-nav x-axis-flex">
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    } 
                    to="."
                    end
                >
                    <p>Dashboard</p>
                </NavLink>
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    } 
                    to="income"
                >
                    <p>Income</p>
                </NavLink>
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    } 
                    to="van"
                >
                    <p>Vans</p>
                </NavLink>
                <NavLink 
                    className={({isActive}) =>{
                        return isActive ? "route-link active-link"
                                        : "route-link";
                        }
                    } 
                    to="reviews"
                >
                    <p>Reviews</p>
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Host;