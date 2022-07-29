import React from 'react';


/**
 * Return a styled checkbox.
 * className is used by <input>
 *
 * @param selected
 * @param option
 * @param onCheckboxChange
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
export default function Checkbox({selected, option, onCheckboxChange, className}) {
    
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
