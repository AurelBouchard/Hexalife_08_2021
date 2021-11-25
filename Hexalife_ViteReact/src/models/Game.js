import {initialSize, initialChanceOfLife, initialRules} from "./gameVarConst";

export default class Game {
    constructor() {
        this.maxId = this.calculateMaxId();
        this.rules = initialRules;
        this.chanceOfLife = initialChanceOfLife;

    }

    calculateMaxId(s = initialSize) { return s*(s+1)*3 }

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

