import React from 'react';
import {maxSpeed} from "../../models/gameVarConst";


/**
 * Return a styled range selector.
 * Allow to change the time between generations (turns).
 *
 * @param speed 1 =< Integer =< 5,
 * @param onChangeSpeed f,
 * @returns {JSX.Element}
 * @constructor
 * @see gameVarConst.js
 */
export default function SpeedRange({speed, onChangeSpeed}) {
    return (
        <div className="range btm-spaced">
            <label
                /*className="c-label"*/
            >
                {"Speed : "+speed}
            </label>
            <input
                /*className="c-input--range"*/
                type="range"
                step={1}
                max={maxSpeed}
                onChange={ onChangeSpeed }
                value={speed}
            />
        </div>
    )
}