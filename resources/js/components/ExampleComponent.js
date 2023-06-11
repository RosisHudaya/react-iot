import React, { useEffect, useState } from "react";
import axios from "axios";

function ExampleComponent() {
    const [waterLevel, setWaterLevel] = useState(null);

    useEffect(() => {
        fetchData();

        // Setup polling interval
        const interval = setInterval(fetchData, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const fetchData = () => {
        axios
            .get("http://192.168.119.149:8000/api/bacajarak")
            .then((response) => {
                const data = response.data;
                console.log(data); // Data yang berhasil diambil

                if (Array.isArray(data)) {
                    const jarakArray = data.map((item) => item.jarak);
                    console.log(jarakArray); // Array nilai jarak yang berhasil diambil

                    setWaterLevel(jarakArray);
                } else {
                    console.error("Invalid data:", data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <div className="dash">
                <h1>DASHBOARD</h1>
            </div>
            <div className="card">
                <div className="content">
                    <h3>Water Level Indicator</h3>
                    <p>Full</p>
                    <p>Medium</p>
                    <p>Empty</p>
                </div>
                <div className="content">
                    <h3>Pump Indicator</h3>
                    <p>ON</p>
                    <p>OFF</p>
                </div>
                <div className="content">
                    <h3>Buzzer Indicator</h3>
                    <p>ON</p>
                    <p>OFF</p>
                </div>
            </div>

            <div className="card">
                <div className="content-3">
                    <h3>Buzzer Indicator</h3>
                    <p className="water-level">
                        {waterLevel !== null
                            ? waterLevel.join(", ")
                            : "Loading..."}
                    </p>
                </div>
                <div className="content-4">
                    <h3>Water Level History</h3>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default ExampleComponent;
