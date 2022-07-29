import React from 'react';

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
