import React from "react";


/**
 * Return a styled range selector.
 * Allow to change the size of the field.
 *
 * @param {number} size 6 =< Integer =< 30, n of layer around the central cell
 * @param onChangeSize
 * @returns {JSX.Element}
 * @constructor
 */
export default function SizeRange({size, onChangeSize}) {
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