import React from "react";
import { Link } from "react-router-dom";

let PageNotFound = () => {

    return (
        <div className="main-body page-not-found-page y-axis-flex">
            <h1>Sorry, the page you were looking for was not found</h1>
            <Link to="/" className="return-home-link">
                <button 
                    className="return-to-home-button"
                >
                    Return to Home
                </button>
            </Link>
        </div>
    );
}

export default PageNotFound;