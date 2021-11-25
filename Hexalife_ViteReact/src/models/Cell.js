export default class Cell {
    constructor(id, neighbours, content="unset", coordX=500, coordY=540) {
        this.id         = id; // number tarting at 0
        this.neighbours = neighbours;   // array of neighbour's id
        this.content    = content;  // string : "unset" before settings, then "empty" | "alive" | "dead" ...
        this.comfort    = 'neutral';
        this.coordX     = coordX;
        this.coordY     = coordY;
    }
}