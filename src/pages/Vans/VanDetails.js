import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let VanDetails = () => {

    const params = useParams();

    const [van, setVan] = useState(null);

    let getVanData = async () => {
        let response = await fetch(`/api/vans/${params.id}`)
                        .then(resp => resp.json())
        setVan(response.vans);
    }

    useEffect(() => {
        getVanData();
    }, [params.id]);

    let color = "";
    if(van != null) {
        if(van.type === "simple") color = "#F97B22";
        else if(van.type === "rugged") color = "#A4D0A4";
        else if(van.type === "luxury") color = "black";
    }

    return (
        <div className="van-details-wrapper">
            {van ? (
                <div key={`${params.id}-van-details`} className="full-van-details y-axis-flex">
                    <img className="van-detail-image" src={van.imageUrl} alt="van" />
                    <span 
                        style={{backgroundColor : color}} 
                        className="van-type">
                        {van.type}
                    </span>
                    <h3>{van.name}</h3>
                    <h4>{`$${van.price}/day`}</h4>
                    <p className="van-detail-desc">{van.description}</p>
                    <button className="rent-van-button">Rent this Vant</button>
                </div>
                ): <h2>Loading ...</h2>
            }
        </div>
    );
}

export default VanDetails;