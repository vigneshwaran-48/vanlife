import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

let VanPricing = () => {

    const { vanData } = useOutletContext();

    if(!vanData) return <h3>Loading ...</h3>

    return (
        <div className="host-x-axis-flex">
            <h1 
                style={{
                    padding: "10px 0px"
                }}
            >
                <b>{`$${vanData.price}`}</b>/day
            </h1>
        </div>
    );
}

export default VanPricing;