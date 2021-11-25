import React from 'react';
import '../styles/Cell.css';


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

