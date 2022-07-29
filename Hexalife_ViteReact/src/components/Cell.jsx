import React from 'react';
import '../styles/Cell.css';

/**
 * Return a styled div according to data given in props.
 *
 * @param {number} id Integer
 * @param {string} content 'alive' || any
 * @param {number} coordX Float
 * @param {number} coordY Float
 * @param {string} comfort 'neutral' || 'fertile' || 'hostile'
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cell({id, content, coordX, coordY, comfort}) {

    return (
        <div className={'hexaOut '+ (comfort === 'neutral' ? 'neutral' : (comfort === 'fertile' ? 'fertile' : 'hostile'))}
             style={{top:coordY, left:coordX}}>
            <div className={'hexaIn '+ (content === 'alive' ? 'alive' : '') }>
                {/*{id}*/}
            </div>
        </div>
    )
};

