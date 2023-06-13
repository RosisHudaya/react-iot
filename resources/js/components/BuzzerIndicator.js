import React, { useState } from "react";
import "./BuzzerIndicator.css";

function BuzzerIndicator() {
    const [buzzer, setBuzzer] = useState(1);

    const handleToggle = () => {
        setBuzzer((prevBuzzer) => (prevBuzzer === 1 ? 0 : 1));
    };

    return (
        <div className="content">
            <h3>Buzzer Indicator</h3>
            <div className="status">
                <div className={`circleBuzzer ${buzzer === 1 ? "on" : ""}`} onClick={handleToggle} />
                <p>ON</p>
            </div>
            <div className="status">
                <div className={`circleBuzzer ${buzzer === 0 ? "off" : ""}`} onClick={handleToggle} />
                <p>OFF</p>
            </div>
        </div>
    );
}

export default BuzzerIndicator;
