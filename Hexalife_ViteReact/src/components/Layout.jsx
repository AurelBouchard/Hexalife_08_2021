import React from 'react';
import '../styles/Layout.css';
import Cell from './Cell';

/**
 * Layout will display an hexagonal field of hexagonal cells.
 *
 * @param isPlaying boolean
 * @param speed 1 =< Integer =< 5
 * @param linkedCells array of Cell object
 * @param step Integer incremented each turn
 * @returns {JSX.Element}
 * @constructor
 */
export default function Layout ({isPlaying, speed, linkedCells, step}) {

    return (
        <div className='grid'>
            <div className='info'>
                <span><i className={
                    (isPlaying && 'playing')
                    + ' fas fa-redo'
                    + ' speed' + speed
                }>{""}</i></span>

                    <span>{"  "+step}</span>

            </div>

            {linkedCells.map(({id, coordX, coordY, content, comfort}) => (
                <Cell key={id}
                      id={id}
                      coordX={coordX}
                      coordY={coordY}
                      content={content}
                      comfort={comfort}
                />
            ))}

        </div>
    )
}
