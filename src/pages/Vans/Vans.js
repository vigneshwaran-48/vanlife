import React, { useEffect, useState } from "react";
import "../../api/server";
import Van from "./Van";

let Vans = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        let response = await fetch("/api/vans")
            .then(resolved => resolved.json());
        setData(response.vans);
    }
    useEffect(() => {
        getData();
    }, []);

    let vans = data.map(elem => <Van van={elem} key={elem.id} />);

    return (
        <div className="main-body vans y-axis-flex">
            <h1>Explore our van options</h1>
            <div className="vans-wrapper x-axis-flex">
                {vans}
            </div>
        </div>
    )
}

export default Vans;