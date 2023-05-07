import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
import "../../api/server";
import Van from "./Van";

let Vans = () => {
    const [data, setData] = useState([]);

    const [searchParams, setSeacrhParams] = useSearchParams();

    let typeFilter = searchParams.get("type");

    typeFilter = typeFilter ? typeFilter.toLowerCase() : typeFilter;

    const getData = async () => {
        let response = await fetch("/api/vans")
            .then(resolved => resolved.json());
        setData(response.vans);
    }
    useEffect(() => {
        getData();
    }, []);

     let filteredVans = typeFilter ? 
            data.filter(elem => {
                return elem && 
                    elem.type &&
                    elem.type.toLowerCase() === typeFilter;
            })
            : data;
    
    let vans = filteredVans.map(elem => 
                        {return (
                                <Link 
                                    className="van-link" 
                                    to={`${elem.id}`}
                                    state={{
                                            search : `?${searchParams.toString()}`,
                                            type : typeFilter
                                        }}
                                    key={elem.id}
                                >
                                    <Van van={elem} />
                                </Link>
                            )
                        });

    return (
        <div className="main-body vans y-axis-flex">
            <h1>Explore our van options</h1>
            <nav className="filter-button-nav x-axis-flex">
                <button 
                    className={
                        `van-filter-button 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                    onClick={() => setSeacrhParams({type : "simple"})}
                >Simple</button>
                <button 
                    className={
                        `van-filter-button 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                    onClick={() => setSeacrhParams({type : "rugged"})}
                >Rugged</button>
                <button 
                    className={
                        `van-filter-button 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                    onClick={() => setSeacrhParams({type : "luxury"})}
                >Luxury</button>
                {
                    typeFilter && <button 
                        className={`van-filter-button ${typeFilter === ""}`}
                                    onClick={() => setSeacrhParams({})}
                                  >Clear</button>
                }
            </nav>
            <div className="vans-wrapper x-axis-flex">
                {vans}
            </div>
        </div>
    )
}

export default Vans;