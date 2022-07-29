import React from "react";
import Checkbox from "./Checkbox";


/**
 * Return 2 set of checkboxes.
 * One checkbox is for choose what number of surrounding alive cells will kill the the surrounded cell.
 * The other is for choose what number of alive cell will make a cell comes to life.
 *
 * @param rules Rules object : { 'spawn': [Integer], 'die': [Integer], 'changing': [Integer]},
 * @param onChangeRules f,
 * @returns {JSX.Element}
 * @constructor
 */
export default function Rules({rules, onChangeRules}) {
    const options = {
        die: ["0", "1", "2", "3", "4", "5", "6"],
        spawn: ["2", "3", "4", "5", "6"]
    }
    
    //const [selection, setSelection] = useState(rules);
    const onCheckboxChange = (e) => {
        const num = parseInt(e.target.name);
        
        function newRules() {
            // result will be a modified clone
            let result = {
                'spawn': [],
                'die': [],
                'changing': []
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

    
    
    return (
        <form>
            <p className='btm-spaced'>Rules :</p>
            <p>{"Die with : " + rules.die.join(", ")}</p>
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
            
            <p>{"Spawn with : " + rules.spawn.join(", ")}</p>
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