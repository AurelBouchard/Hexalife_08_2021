import React, {useState, useEffect, useReducer} from 'react';

//import style :
import '../src/styles/App.css';

// import global const :
import {initialSize, initialSpeed, timeBySpeed} from './models/gameVarConst';

// import children :
import Layout from "./components/Layout";
import ControlPanel from './components/Controls';


export default function App({field}) {

    const [isPlaying, setIsPlaying] = useState(false)
    const handleToggle = () => { setIsPlaying(!isPlaying) }

    const [justReset, reset] = useState(false)
    const handleReset = () => {
        setIsPlaying(false);
        reset(false);
    }

    const [speed, setSpeed] = useState(initialSpeed)
    const handleSpeedChange = (e) => {
        handleReset();
        setSpeed(e.target.value);
        console.log("interval set to "+timeBySpeed[e.target.value]+"ms")
    }

    const [size, setSize] = useState(initialSize)
    const handleSizeChange = (e) => {
        handleReset();
        setSize(e.target.value);

        field.game.changeSize(parseInt(e.target.value));
        fullFieldReload(field);

        setEvolution(field);
        incStep(0);
    }

    const [density, setDensity] = useState(field.game.chanceOfLife);
    const handleDensityChange = (e) => {
        handleReset();
        setDensity(e.target.value);

        field.game.changeChanceOfLife(e.target.value);
        fullFieldReload(field);

        setEvolution(field);
        incStep(0);
    }


    const [step, incStep] = useState(0)
    const [evolution, setEvolution] = useState(field)
    const evolute = () => {
        if (isPlaying) {
            console.log("EVOLVE !!!!");
            field.applyRules().then();
            setEvolution(field);
            incStep(step+1);
        }
    }


    const [rules, setRules] = useState(field.game.rules);
    const handleRulesChange = (selection) => {
        handleReset();
        setRules(selection);

        field.game.changeRules(selection);
        fullFieldReload(field);

        setEvolution(field);
        incStep(0);
    }

    useEffect(() => {
        let run = setTimeout(evolute, timeBySpeed[speed] )
        if (!isPlaying) { clearTimeout(run) }
        if (!justReset) { reset(true) }
    })


    return (
        <main>
            <Layout
                isPlaying={isPlaying}
                speed={speed}
                linkedCells={evolution.linkedCells}
                step={step}
            />
            <ControlPanel
                field={field}
                isPlaying={isPlaying}
                togglePlayPause={handleToggle}
                handleReset={handleReset}
                speed={speed}
                onChangeSpeed={handleSpeedChange}
                size={size}
                onChangeSize={handleSizeChange}
                density={density}
                onChangeDensity={handleDensityChange}
                rules={rules}
                onChangeRules={handleRulesChange}
            />
        </main>
    )
}


function fullFieldReload(field) {
    field.updateListOfIds().then();
    field.generateLinking().then();
    field.clearGrid().then();
    field.refillCells().then();
    field.updateLivingUnitsList().then();
}