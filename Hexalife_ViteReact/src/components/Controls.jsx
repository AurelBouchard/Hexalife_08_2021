import React from 'react';
import '../styles/Controls.css';

import BtnReset from "./controls/BtnReset";
import BtnPlayPause from "./controls/BtnPlayPause";
import SpeedRange from "./controls/SpeedRange";
import {SizeRange} from "./controls/SizeRange";
import {Populate} from "./controls/Populate";
import {Rules} from "./controls/Rules";

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


