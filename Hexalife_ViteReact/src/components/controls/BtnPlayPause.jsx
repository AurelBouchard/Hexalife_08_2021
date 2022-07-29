import React from 'react';


/**
 * Return a styled button.
 *
 * @param togglePlayPause f,
 * @param isPlaying boolean,
 * @returns {JSX.Element}
 * @constructor
 */
export default function BtnPlayPause({togglePlayPause, isPlaying}) {
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
