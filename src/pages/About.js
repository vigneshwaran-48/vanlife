import React from "react";

let About = () => {

    return (
        <div className="main-body about main-body">
            <div className="about-image"></div>
            <div className="about-body">
                <h2>Learn React router in freecodecamp</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book.
                </p>
                <p>
                    when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book.
                </p>
                <div className="about-bottom">
                    <h3>Your destination is waiting</h3>
                    <h3>Your van is ready</h3>
                    <button className="explore-van-button">Explore our vans</button>
                </div>
            </div>
        </div>
    );
}

export default About;