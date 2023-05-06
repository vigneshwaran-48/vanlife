import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

let VanDetails = () => {

    const [vanData, setVanData] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVanData(data.vans[0]));
    }, []);

    let color = "";

    if(vanData && vanData.type === "simple") color = "#F97B22";
    else if(vanData && vanData.type === "rugged") color = "#A4D0A4";
    else if(vanData && vanData.type === "luxury") color = "black";

    if(!vanData) return <h1>Loading ...</h1>

    return (
        <div className="host-van-details main-body y-axis-flex">
           <Link
                className="route-link" 
                to=".." 
                relative="path" 
            >
                Go back
            </Link>

            <div className="host-van-details-body y-axis-flex">
                <div className="host-van-details-header y-axis-flex">
                    <div className="x-axis-flex">
                        <img 
                            className="host-van-details-image"
                            src={vanData.imageUrl} 
                            alt="van" />
                        <div className="host-van-details-info y-axis-flex">
                            <span
                                style={{
                                    backgroundColor : color,
                                    color: "white",
                                }}
                                className="van-type"
                            >
                                {vanData.type}
                            </span>
                            <h2 
                                style={{
                                    padding: "10px 0px",
                                    fontSize : "20px"
                                }}
                            >
                                {vanData.name}
                            </h2>
                            <p><b>{`$${vanData.price}`}</b>/day</p>
                        </div>
                    </div>
                </div>
                <nav className="host-details-nav x-axis-flex">
                    <NavLink 
                        className={({isActive}) =>{
                            return isActive ? "route-link active-link"
                                            : "route-link";
                            }
                        } 
                        style={{paddingLeft : "0px"}}
                        to="."
                        end
                    >
                        Details
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>{
                            return isActive ? "route-link active-link"
                                            : "route-link";
                            }
                        } 
                        to={`pricing`}
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>{
                            return isActive ? "route-link active-link"
                                            : "route-link";
                            }
                        } 
                        to={`photos`}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{vanData}} />
            </div>
        </div>
    )
}

export default VanDetails;