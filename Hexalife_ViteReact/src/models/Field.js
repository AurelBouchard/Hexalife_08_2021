import Cell from "./Cell";
import Game from "./Game"
import {comfortList, contentList, offsetX, offsetY} from "./gameVarConst";


/**
 * Class that allow to create an object 'field' that contains Cells.
 * MUST BE UNIQUE !
 *
 */


export default class Field {
    /**
     * Create a field with a game, a list of Id, a linkedCells object and a list of living units.
     * See initial parameters here :
     *
     * {@link /Hexalife/Hexalife_ViteReact/src/models/gameVarConst.js}
     *
     * {@link Game#constructor}
     *
     * @see Game
     * @constructor
     */
    constructor() {
        this.game = new Game();
        this.listOfId = this.generateIds(this.game.maxId);         // [numbers]
        this.linkedCells = [];      // [objects cell]
        this.idOfLivingUnits = [];      // [numbers]
    }
    
    /**
     * Return an array of integer from 0 to lastId.
     *
     * @param {number} lastId
     * @returns {number[]}
     */
    generateIds(lastId) {
        let list = [];
        for (let i=0; i<= lastId; i++) { list.push(i) }
        return list;
    }

    
    /**
     * Linking cells to each others,
     * This might be called one time.
     *
     * @returns {Promise<void>}
     */
    async generateLinking() {
        let nextId = 1;
        this.linkedCells = [];

        this.listOfId.forEach(id => { // id is a number
            // create the cell in the nested cell array
            if (id === 0) {this.linkedCells.push(new Cell(id, [-1,-1,-1,-1,-1,-1], 'empty'))}

            // check each neighbour cell's id
            // if empty => attribute next Id then increment it, else nothing
            let neighbourhood = this.linkedCells[id].neighbours;

            for (let i in neighbourhood ) {
                if (neighbourhood[i] === -1) {  // meaning unset
                    neighbourhood[i] = nextId;
                    this.linkedCells.push(new Cell(nextId, [-1,-1,-1,-1,-1,-1], "empty",
                        offsetX[i]+this.linkedCells[id].coordX,
                        offsetY[i]+this.linkedCells[id].coordY
                    ));
                    nextId++;
                }
            }

            //console.log("neighbourhood of cell num "+id);
            //console.log(neighbourhood);

            // when all neighbour set, tell them who are they neighbour using the flower pattern
            // position 0 :
            if (this.linkedCells[neighbourhood[0]].neighbours[2] === -1) {this.linkedCells[neighbourhood[0]].neighbours[2] = neighbourhood[1]}
            if (this.linkedCells[neighbourhood[0]].neighbours[3] === -1) {this.linkedCells[neighbourhood[0]].neighbours[3] = id}
            if (this.linkedCells[neighbourhood[0]].neighbours[4] === -1) {this.linkedCells[neighbourhood[0]].neighbours[4] = neighbourhood[5]}

            // position 1
            if (this.linkedCells[neighbourhood[1]].neighbours[3] === -1) {this.linkedCells[neighbourhood[1]].neighbours[3] = neighbourhood[2]}
            if (this.linkedCells[neighbourhood[1]].neighbours[4] === -1) {this.linkedCells[neighbourhood[1]].neighbours[4] = id}
            if (this.linkedCells[neighbourhood[1]].neighbours[5] === -1) {this.linkedCells[neighbourhood[1]].neighbours[5] = neighbourhood[0]}

            // position 2
            if (this.linkedCells[neighbourhood[2]].neighbours[4] === -1) {this.linkedCells[neighbourhood[2]].neighbours[4] = neighbourhood[3]}
            if (this.linkedCells[neighbourhood[2]].neighbours[5] === -1) {this.linkedCells[neighbourhood[2]].neighbours[5] = id}
            if (this.linkedCells[neighbourhood[2]].neighbours[0] === -1) {this.linkedCells[neighbourhood[2]].neighbours[0] = neighbourhood[1]}

            // position 3
            if (this.linkedCells[neighbourhood[3]].neighbours[5] === -1) {this.linkedCells[neighbourhood[3]].neighbours[5] = neighbourhood[4]}
            if (this.linkedCells[neighbourhood[3]].neighbours[0] === -1) {this.linkedCells[neighbourhood[3]].neighbours[0] = id}
            if (this.linkedCells[neighbourhood[3]].neighbours[1] === -1) {this.linkedCells[neighbourhood[3]].neighbours[1] = neighbourhood[2]}

            // position 4
            if (this.linkedCells[neighbourhood[4]].neighbours[0] === -1) {this.linkedCells[neighbourhood[4]].neighbours[0] = neighbourhood[5]}
            if (this.linkedCells[neighbourhood[4]].neighbours[1] === -1) {this.linkedCells[neighbourhood[4]].neighbours[1] = id}
            if (this.linkedCells[neighbourhood[4]].neighbours[2] === -1) {this.linkedCells[neighbourhood[4]].neighbours[2] = neighbourhood[3]}

            // position 5
            if (this.linkedCells[neighbourhood[5]].neighbours[1] === -1) {this.linkedCells[neighbourhood[5]].neighbours[1] = neighbourhood[0]}
            if (this.linkedCells[neighbourhood[5]].neighbours[2] === -1) {this.linkedCells[neighbourhood[5]].neighbours[2] = id}
            if (this.linkedCells[neighbourhood[5]].neighbours[3] === -1) {this.linkedCells[neighbourhood[5]].neighbours[3] = neighbourhood[4]}

        });
    }
    
    
    /**
     * Remove all living cells.
     * @returns {Promise<void>}
     */
    async clearGrid() {
        //console.log("/////////// CLEAR //////////////")

        // boundaries don't have comfort
        this.linkedCells.forEach((cell) => {
            if (cell.id > this.game.maxId) {
                cell.content = contentList[2]
            }
            else {
                cell.content = contentList[1];
                cell.comfort = comfortList[1];
            }
        });

        // now there is no living units
        this.idOfLivingUnits = [];
    }
    
    /**
     * Go through each cell, check content, if it's not a boundary make it alive according to chanceOfLife and set a random confort.
     * @see gameVarConst.js
     * @returns {Promise<void>}
     */
    async refillCells() {
        //console.log("/////////// REFILL //////////////")

        // boundaries don't have content
        this.linkedCells.forEach((cell) => {
            if (cell.id > this.game.maxId) {
                cell.content = contentList[2]
            }
            else {
                const randomContent = (Math.random() > this.game.chanceOfLife ? 1 : 0);
                cell.content = contentList[randomContent];

                const randomConfort = Math.floor(Math.random() * 3);
                cell.comfort = comfortList[randomConfort];
            }
        })
    }
    
    /**
     * Update the list of living cells id.
     * @returns {Promise<void>}
     */
    async updateLivingUnitsList() {
        //console.log("/////////// UPDATE LUL //////////////")

        // update list of id of living units
        this.idOfLivingUnits = [];
        this.linkedCells.forEach((cell) => {
            if (cell.content === contentList[0]) {this.idOfLivingUnits.push(cell.id)}
        })
        //console.log(this.idOfLivingUnits)
    }
    
    /**
     * If rules are changed
     * @returns {Promise<void>}
     */
    async applyRules() {
        //console.log("apply rule from Field")
        //console.log(this.idOfLivingUnits)
        this.linkedCells.forEach((cell) => {
            let nOfLA = nOfLivingAround(cell.neighbours, this.idOfLivingUnits);

            if (this.game.rules.spawn.includes(nOfLA)) { cell.content = contentList[0] }
            if (this.game.rules.die.includes(nOfLA)) { cell.content = contentList[1] }
        })

        this.updateLivingUnitsList().then();
    }
    
    /**
     * If size change, some Ids will be create or deleted
     * @returns {Promise<void>}
     */
    async updateListOfIds() {
        this.listOfId = this.generateIds(this.game.maxId);
    }

}


/**
 * Count how many living cells are surrounding by comparing the neighbourhood and the list of living Ids.
 * This function don't determine position of living units.
 * @param neighbourhood
 * @param listOfId
 * @returns {number}
 */
function nOfLivingAround(neighbourhood, listOfId) {
    const common = neighbourhood.filter(id => listOfId.includes(id));
    return common.length;
}