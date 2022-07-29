import {initialSize, initialChanceOfLife, initialRules} from "./gameVarConst";

/**
 * Class representing a 'game'.
 * A game is :
 * - limited by the (area) size,
 * - ruled by rules,
 * - modified by a parameter : the initial chance of life.
 * This a game of life ;)
 */
export default class Game {
    /**
     * Create a game with maxId, rules and initial chance of life.
     */
    constructor() {
        this.maxId = this.calculateMaxId();
        this.rules = initialRules;
        this.chanceOfLife = initialChanceOfLife;
    }
    
    /**
     * Calculate the maximum number of cells in the field according to its size
     * @param size
     * @returns {number}
     */
    calculateMaxId(size = initialSize) { return size*(size+1)*3 }

    changeSize(size) {
        let newMax = this.calculateMaxId(size);
        console.log("change maxId to "+newMax)
        this.maxId = newMax;
    }

    changeChanceOfLife(newDensity) {
        console.log("change density to "+newDensity)
        this.chanceOfLife = newDensity;
    }

    changeRules(newRules) {
        console.log("new rules : ")
        console.log(newRules)
        this.rules = newRules;
    }

}

