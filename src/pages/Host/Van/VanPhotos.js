import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

let VanPhotos = () => {

    const { vanData } = useOutletContext();

    if(!vanData) return <h3>Loading ...</h3>

    return (
        <div className="host-van-details-photo-wrapper x-axis-flex">
            <img 
                className="host-van-details-photo"
                src={vanData.imageUrl} 
                alt="van"        
            />
        </div>
    );
}

export default VanPhotos;