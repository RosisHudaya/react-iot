import React, { useEffect, useState } from "react";
import axios from "axios";
import WaterLevel from "./WaterLevel";
import PumpIndicator from "./PumpIndicator";
import BuzzerIndicator from "./BuzzerIndicator";
import WaterLevelHistory from "./WaterLevelHistory";
import WaterLevelIndicator from "./WaterLevelIndicator";

function Dashboard() {
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
            .get("http://192.168.119.45:8000/api/bacajarak")
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
                <WaterLevelIndicator />
                <PumpIndicator />
                <BuzzerIndicator />
            </div>
            <div className="card">
                <WaterLevel waterLevel={waterLevel} />
                <WaterLevelHistory waterLevel={waterLevel} />
            </div>
        </div>
    );
}

export default Dashboard;
