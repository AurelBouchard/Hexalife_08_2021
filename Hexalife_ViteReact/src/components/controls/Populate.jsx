import React from "react";

export function Populate({density, onChangeDensity}) {
    return (
        <div className="range btm-spaced">
            <label className="label">
                {"Density : " + Math.trunc(density * 100) + "%"}
            </label>
            <input
                className="input"
                type="range"
                step={0.05}
                min={0.1}
                max={0.9}
                onChange={onChangeDensity}
                value={density}
            />
        </div>
    )
}