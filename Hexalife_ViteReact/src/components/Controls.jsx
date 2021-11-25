import React, {useState} from 'react';
import {maxSpeed} from '../models/gameVarConst';
import '../styles/Controls.css';


export default function ControlPanel({
                                         field,
                                         isPlaying,
                                         handleReset,
                                         togglePlayPause,
                                         speed,
                                         onChangeSpeed,
                                         size,
                                         onChangeSize,
                                         density,
                                         onChangeDensity,
                                         rules,
                                         onChangeRules
}){


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


function BtnReset({field, handleReset}) {
    return (
        <div className='logi'>
            <button className='btn small_font'
                    onClick={() => {
                        console.log("click on reset")
                        handleReset();
                        field.clearGrid().then();
                        field.refillCells().then();
                        field.updateLivingUnitsList().then();
                    }}>
                RESET
            </button>
        </div>
    )
}


function BtnPlayPause({togglePlayPause, isPlaying}) {
    return (
        <div className='logi'>
            <button className='btn small_font'
                    onClick={()=> {
                        {isPlaying ? console.log("click on Pause") : console.log("click on Play")}
                        togglePlayPause();
                    }}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    )
}


function SpeedRange({speed, onChangeSpeed}) {
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


function SizeRange({size, onChangeSize}) {
    return (
        <div className="range btm-spaced">
            <label className="label">
                {"Size : "+size}
            </label>
            <input
                className="input"
                type="range"
                step={1}
                min={6}
                max={30}
                onChange={ onChangeSize }
                value={size}
            />
        </div>
    )
}


function Populate({density, onChangeDensity}) {
    return (
        <div className="range btm-spaced">
            <label className="label">
                {"Density : "+Math.trunc(density*100)+"%"}
            </label>
            <input
                className="input"
                type="range"
                step={0.05}
                min={0.1}
                max={0.9}
                onChange={ onChangeDensity }
                value={density}
            />
        </div>
    )
}


function Rules({rules, onChangeRules}) {
    const options = {
        die: ["0","1","2","3","4","5","6"],
        spawn: ["2","3","4","5","6"]}

    //const [selection, setSelection] = useState(rules);
    const onCheckboxChange = (e) => {
        const num = parseInt(e.target.name);

        function newRules() {
            // result will be a modified clone
            let result = {
                'spawn':[],
                'die':[],
                'changing':[]
            };

            // modify clone according to kind of rule
            if (e.target.className === "die") {
                result.spawn = rules.spawn.map(a => a);
                result.die = adapt(rules.die, num);
            }
            if (e.target.className === "spawn") {
                result.die = rules.die.map(a => a);
                result.spawn = adapt(rules.spawn, num);
            }

            // adapt the needed parameter
            function adapt(array, num) {
                let newArray = [];
                if (array.includes(num)) { // remove from array
                    newArray = array.filter(val => val !== num);
                } else { // add to array
                    newArray = array.map(a => a);
                    newArray.push(num)
                }
                return newArray
            }

            return result;
        }

        onChangeRules(newRules())
    }


    const Checkbox = ({selected, option, onCheckboxChange, className}) => {
        return (
            <div className='check'>
                <label>{option}</label>
                <input
                    type="checkbox"
                    name={option}
                    className={className}
                    checked={selected.includes(parseInt(option))}
                    onChange={onCheckboxChange}
                />
            </div>
        )
    }

    return (
        <form>
            <p className='btm-spaced'>Rules :</p>
            <p>{"Die with : "+rules.die.join(", ")}</p>
            <div className='checkboxes btm-spaced'>
                {options.die.map((option) => (
                    <Checkbox
                        className="die"
                        key={option}
                        selected={rules.die}
                        option={option}
                        onCheckboxChange={onCheckboxChange}
                    />
                ))}
            </div>

            <p>{"Spawn with : "+rules.spawn.join(", ")}</p>
            <div className='checkboxes'>
                {options.spawn.map((option) => (
                    <Checkbox
                        className="spawn"
                        key={option}
                        selected={rules.spawn}
                        option={option}
                        onCheckboxChange={onCheckboxChange}
                    />
                ))}
            </div>
        </form>
    )
}

