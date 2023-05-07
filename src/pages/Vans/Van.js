import React from "react";
import { Link } from "react-router-dom";

let Van = props => {

    let color = "";

    if(props.van.type === "simple") color = "#F97B22";
    else if(props.van.type === "rugged") color = "#A4D0A4";
    else if(props.van.type === "luxury") color = "black";

    return (
        <div className="van y-axis-flex" id={`van-${props.van.id}`}>
            <img src={props.van.imageUrl} className="van-image" alt="van" />
            <div className="van-name-price x-axis-flex">
                <h4 className="van-head-name">{props.van.name}</h4>
                <h4>{`$${props.van.price}/day`}</h4>
            </div>
            <span 
                style={{backgroundColor : color}} 
                className="van-type">
                {props.van.type}
            </span>
        </div>
    )
}

export default Van;