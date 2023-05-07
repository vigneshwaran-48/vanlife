import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let Vans = () => {

    const [vanData, setVanData] = useState([]);

    useEffect(() => {
        console.log("use effect ...")
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setVanData(data.vans));
    }, []);

    const vanElements = vanData.map(elem => {
        return (
            <Link 
                key={`host-van-${elem.id}`}
                className="host-van-link" 
                to={`${elem.id}`}
            >
                <div className="host-van x-axis-flex">
                    <img className="host-van-image" src={elem.imageUrl} alt="van" />
                    <div className="host-van-body">
                        <h3>{elem.name}</h3>
                        <p>{`$${elem.price}/day`}</p>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <div className="host-body y-axis-flex">
            <h1>Your listed vans</h1>
            {
                vanElements && vanElements.length
                    ? 
                    <div className="host-van-list y-axis-flex">
                        {vanElements}
                    </div>
                    :
                    <h2>Loading ...</h2>
            }
        </div>
    );
}

export default Vans;