import React from 'react';
import '../styles/Controls.css';

import BtnReset from "./controls/BtnReset";
import BtnPlayPause from "./controls/BtnPlayPause";
import SpeedRange from "./controls/SpeedRange";
import SizeRange from "./controls/SizeRange";
import Populate from "./controls/Populate";
import Rules from "./controls/Rules";

/**
 * Display the control panel.
 *
 * @param {Field} field Field object we are working on
 * @param {boolean} isPlaying
 * @param handleReset
 * @param togglePlayPause
 * @param {number} speed 1 =< Integer =< 5
 * @param onChangeSpeed
 * @param {number} size 6 =< Integer =< 30, n of layer around the central cell
 * @param onChangeSize
 * @param {number} density 0.1 =< Float =< 0.9, % of chance that each cell is living
 * @param onChangeDensity
 * @param {{spawn: number[], die: number[], changing: number[]}} rules
 * @param onChangeRules
 * @returns {JSX.Element}
 * @constructor
 */
export default function ControlPanel({field, isPlaying, handleReset, togglePlayPause,
                                         speed, onChangeSpeed, size, onChangeSize,
                                         density, onChangeDensity, rules, onChangeRules }){
    
        return (
            <div className='controlPanel'>
                <div className='board btm-spaced'>
                    <BtnReset
                        handleReset={handleReset}
                        field={field}
                    />
                    <BtnPlayPause
                        isPlaying={isPlaying}
                        togglePlayPause={togglePlayPause}
                    />
                </div>
                <SpeedRange
                    speed={speed}
                    onChangeSpeed={onChangeSpeed}
                />
                <SizeRange
                    size={size}
                    onChangeSize={onChangeSize}
                />
                <Populate
                    density={density}
                    onChangeDensity={onChangeDensity}
                />
                <Rules
                    rules={rules}
                    onChangeRules={onChangeRules}
                />
            </div>
        )
}


