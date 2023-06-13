import React from "react";

function WaterLevel({ waterLevel }) {
    return (
        <div className="content-3">
            <h3>Water Level Indicator</h3>
            <p className="water-level">
                {waterLevel !== null ? waterLevel.join(", ") : "Loading..."}
            </p>
        </div>
    );
}

export default WaterLevel;
