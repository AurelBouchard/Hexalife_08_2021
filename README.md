# Hexalife
**HEXAGONAL VERSION OF THE FAMOUS GAME OF LIFE**
![Hexalife demo](user_guide/sample.gif)

Contents
========

* [1. Why?](#why)
* [2. Stack](#stack)
* [3. How it works](#how_it_works)
* [4. Usage](#usage)
* [5. Folder](#folder)
* [6. Upcoming changes](#upcoming)
* [7. Contact](#contact)
* [8. License](#license)

-------
<a name="why"></a>
## 1. Why?

The square base does not accurately reflect reality; a diagonal box is indeed more distant than a square next to it.
The hexagonal base solves this problem: each box is at equal distance from all its direct neighbors (center to center).
It is a widespread structure in nature.

<a name="stack"></a>
## 2. Stack

- **Front-end** :
 * [*React*](https://reactjs.org "reactjs.org")

- **Back-end** :
 * *Hydrogen* may be implemented later

- **Dev tools** :
 * [*Vite*](https://vitejs.dev/ "vitejs.dev")

<br />

<a name="how_it_works"></a>
## 3. How it works

### LAYERS
Let consider that the first cell is at layer 0
Each cells surrounding that first one are on layer 1
![Layers](user_guide/layer.png)
There is 6 cells at layer 1, 12 cells at layer 2, and so on ...

<br />

### NUMBERING : NESTING THE CELLS
The first cell is a kind of origin 0 of the field, its number is 0 (id=0).
The cells in first layer around the 0 are numbered from 1 to 6.
1 is the cell on top of 0, then numbers follow clockwise (see red lines).
![Layers](user_guide/layer.png)
Then the numbering go clockwise around the minimum value of the last layer, here it's 1 : (see orange lines)
On top of 1 comes the next cell value here is 7, then 8 comes between 7, 2 and 1.
![Numbering](user_guide/numbering.png)
Now number should go in place of 2 ! no, the code check clockwise the next unnumbered cell,
cell contains 0 : no change, cell contains 6 : no change, cell is empty => next value = 9.
Now 1 have all neighbours : 7, 8, 2, 0, 6, 9 (order is REALLY important to keep the net on a 2 dimensions plan)
Now go to the next cell in layer 1 : 2 (see yellow lines)
Check clockwise, start on top (index 0 of array):
cell contains 8 : no change, cell is empty => next value = 10, cell is empty => next value = 11.
etc...
(see green lines, then teal, then purple and finally light green)

<br />

### NAMING CONVENTION
#### cell :
this is not living or dead, it's an empty cell if it exists. Its shape is a hexagon.

<br />

#### alive unit :
it's what in original game of life it's called a living cell. here the living unit can be round or hexagon shaped.

<br />

#### dead unit :
it's a unit used to be alive, the dead unit disappear (instantly or not, in option) and leave the cell empty.

<br />

#### boundaries :
cells where living units cannot be set or exist.

<br />

#### killing cell :
it's an option added by my own : if a living unit spawn in the first layer around the killing cell, that unit will die next turn.
cells can have 3 stage of comfort : fertile, neutral or hostile. fertile reduce the number of living units needed to spawn,
neutral is normal and hostile is opposite of fertile.

<br />

### RULES
+ #### Live
A new living unit is generated in an empty cell surrounded by at least 3 living units (options may modify that value)

+ #### Die
A living unit will die if it's surrounded by 5 or more living units (options may modify that value)

<br />

<pre>
    cell :    |   fertile   |  neutral   |  hostile
----------------------------------------------------
  spawn  | 2 and +   | 3 and +   | 4 and +
      die     | 1, 5 or 6  | 1, 2, 5, 6 | 1, 2, 3, 5, 6
</pre>



#### option : display pattern on html page


#### generate step 0 of life : random placement of n living units



