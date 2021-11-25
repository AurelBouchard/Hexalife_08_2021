import React from 'react';
import '../styles/Layout.css';
import Cell from './Cell';


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
