import React from 'react';

export default function BtnReset({field, handleReset}) {
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

