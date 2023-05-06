import React from "react";
import { useOutletContext } from "react-router-dom";

let CurrentVanDetails = () => {

    const { vanData } = useOutletContext();

    if(!vanData) return <h3>Loading ...</h3>

    return (
        <div className="y-axis-flex">
            <p className="current-van-desc-para">
                <b>Name: </b>{vanData.name}
            </p>
            <p className="current-van-desc-para">
                <b>Category: </b>{vanData.type}
            </p>
            <p className="current-van-desc-para">
                <b>Description: </b>{vanData.description}
            </p>
            <p className="current-van-desc-para">
                <b>Visibility: </b>Public
            </p>
        </div>
    );
}

export default CurrentVanDetails;