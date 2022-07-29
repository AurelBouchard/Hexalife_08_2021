import React from 'react';
import {maxSpeed} from "../../models/gameVarConst";

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