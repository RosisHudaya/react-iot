import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WaterLevelIndicator.css";

function WaterLevelIndicator() {
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
            .get("http://192.168.119.45:8000/api/bacajarak") // Ganti URL sesuai endpoint API Anda
            .then((response) => {
                const data = response.data;

                if (typeof data === "number") {
                    setWaterLevel(data);
                } else {
                    console.error("Invalid data:", data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="content">
            <h3>Water Level Indicator</h3>
            <div className="status">
                <div className={`circle ${waterLevel <= 5 ? "full" : ""}`} />
                <p className="label">Full</p>
            </div>
            <div className="status">
                <div className={`circle ${waterLevel < 25 && waterLevel > 5 ? "medium" : ""}`} />
                <p className="label">Medium</p>
            </div>
            <div className="status">
                <div className={`circle ${waterLevel >= 25 ? "empty" : ""}`} />
                <p className="label">Empty</p>
            </div>
        </div>
    );
}

export default WaterLevelIndicator;
