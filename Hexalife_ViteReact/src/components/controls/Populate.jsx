import React from "react";


/**
 * Return a styled range selector.
 * Allow to change the initial number of living cells.
 *
 * @param {number} density 0.1 =< Float =< 0.9, % of chance that each cell is living
 * @param onChangeDensity
 * @returns {JSX.Element}
 * @constructor
 */
export default function Populate({density, onChangeDensity}) {
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