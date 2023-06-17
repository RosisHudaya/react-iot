import React, { useState } from "react";
import "./PumpIndicator.css";

function PumpIndicator() {
    const [pumpStatus, setPumpStatus] = useState(1);

    const handleToggle = () => {
        setPumpStatus((prevStatus) => (prevStatus === 1 ? 0 : 1));
    };

    return (
        <div className="content">
            <h3>Pump Indicator</h3>
            <div className="status">
                <div className={`circlePump ${pumpStatus === 1 ? "on" : ""}`} onClick={handleToggle} />
                <p>ON</p>
            </div>
            <div className="status">
                <div className={`circlePump ${pumpStatus === 0 ? "off" : ""}`} onClick={handleToggle} />
                <p>OFF</p>
            </div>
        </div>
    );
}

export default PumpIndicator;
