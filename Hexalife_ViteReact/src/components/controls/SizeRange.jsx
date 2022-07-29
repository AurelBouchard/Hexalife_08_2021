import React from "react";

export function SizeRange({size, onChangeSize}) {
    return (
        <div className="range btm-spaced">
            <label className="label">
                {"Size : " + size}
            </label>
            <input
                className="input"
                type="range"
                step={1}
                min={6}
                max={30}
                onChange={onChangeSize}
                value={size}
            />
        </div>
    )
}