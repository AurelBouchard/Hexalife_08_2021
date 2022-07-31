# Hexalife
**HEXAGONAL VERSION OF THE FAMOUS GAME OF LIFE**

![Hexalife demo](https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/sample.gif)

> *Wikipedia :*
>
> *The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.*

[See the full article on Wikipedia.org](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

[For french readers on Wikipedia.org](https://fr.wikipedia.org/wiki/Jeu_de_la_vie)

Contents
========

* [1. Why?](#why)
* [2. Stack](#stack)
* [3. How it works](#how_it_works)
  - [LAYERS](#layers)
  - [NUMBERING : NESTING THE CELLS](#numbering)
  - [GENERATE STEP 0 OF LIFE](#step0)
  - [RULES](#rules)
  - [NAMING CONVENTION](#naming_convention)
* [4. Controls](#controls)
* [5. Folders](#folder)
* [6. Upcoming changes](#upcoming)
* [7. Contact](#contact)
* [8. License](#license)

-------
<a name="why"></a>
## 1. Why?

The square base does not accurately reflect reality; a box in a corner is indeed more distant than a box at its side next to it.

![Empty pattern](Hexalife_ViteReact/https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/empty_pattern.png)

The hexagonal base solves this problem: each box is at equal distance from all its direct neighbors (center to center).
It is a widespread structure (or pattern) in nature.

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

<a name="layers"></a>
### LAYERS
Let consider that the first cell is at layer 0.

Each cell surrounding that first one are on layer 1.

![Layers](https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/layer.png)

There is 6 cells at layer 1, 12 cells at layer 2, and so on ...

<br />

<a name="numbering"></a>
### NUMBERING : linking the cells layer by layer
The first cell is a kind of origin 0 of the field, its number is 0 (id=0).

The cells in first layer around the 0 are numbered from 1 to 6.

1 is the cell on top of 0, then numbers follow clockwise (see red lines).

Then the numbering go clockwise around the minimum value of the last layer, here it's 1 : (see orange lines)

On top of 1 comes the next cell value: here it is 7, then 8 comes between 7, 2 and 1.

![Numbering](https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/numbering.png)

Now if we continue clockwise, the cell is already numbered with 2.

So, the code check clockwise the next unnumbered cell around cell 1 :

cell contains 0 : no change, cell contains 6 : no change, cell is empty => next value = 9.

And this is the 6th cell surrounding 1.

Now 1 has all her neighbours : 7, 8, 2, 0, 6, 9. Order is REALLY important to keep the net on a 2 dimensions plan.

In the code, cell object with id 1 has a property called neighbourhood that's an array of cell.id (integer).

In that case, cell[1].neighbourhood = [7,8,2,0,6,9]

Now go to the next cell in layer 1 : 2 (see yellow lines)

Check clockwise, start on top (index 0 of array):
cell contains 8 : no change, cell is empty => next value = 10, cell is empty => next value = 11, cell contains 3 : no change etc...

When the 6 cells around have been checked, cell[2].neighbourhood = [8,10,11,3,0,1]

Code performs this on each cell of each layer.
(see green lines, then teal, then purple and finally light green)

When all cells of a layer have their neighborhood defined, the code jump to the next layer.

Thus we have:
Layer 0 : 0
Layer 1 : 1, 2, 3, 4, 5, 6
Layer 2 : 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 9

The next layer will start at 19 (on top of 7).

![Numbered pattern](https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/numbered_pattern.png)

Maximum number of layers is fixed to 30, which give us a field of 2 790 cells, and 16 740 links.

<br />

<a name="step0"></a>
### GENERATE STEP 0 OF LIFE : random placement of n living units

Initial parameters are set in the gameVarConst.js file.

One of them is the chanceOfLife expressed in percentage and *0.1 =< x =< 0.9*.

After generating the field, i.e. all the cells and linking, each cell which is not a boundary, randomly becomes a living unit according to the chanceOfLife parameter.

When you set this parameter to 45%, each cell has 45% of chance to contain a living unit, so the field is **roughly** containing 45% of living units.

![45% chance of life](https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/chanceOfLife.png)


<br />

<a name="rules"></a>
### RULES
+ #### Live
A new living unit is generated in an empty cell surrounded by at least 3 living units (options may modify that value)

+ #### Die
A living unit will die if it's surrounded by 5 or more living units (options may modify that value)

<br />

<pre>
  cell :  |  fertile   |  neutral   |  hostile
----------------------------------------------------
  spawn   |  2 and +   |  3 and +   |  4 and +
   die    | 1, 5 or 6  | 1, 2, 5, 6 | 1, 2, 3, 5, 6
</pre>

'Fertile' and 'Hostile' options are not implemented yet.

Instead, controls allow to modify the values for spawn and die rules.

> **Nota:**
> 
> Die rules override spawn rules if they have the same value

<br />

<a name="naming_convention"></a>
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

<a name="controls"></a>
## 4. Controls
The control panel allows user to change game parameters:

![Controls](https://github.com/AurelBouchard/Hexalife_08_2021/blob/master/Hexalife_ViteReact/user_guide/controls.png)

- Reset button: reset a new field with current parameters
- Play/Pause button: start and stop generation cycle
- Speed range: 1 is low, 5 is high. This is performed by reducing the time between generations (render)
- Size range: select how many layers, from 6 to 30
- Density range: clean the field then generate the [step 0](#step0)
- Checkbox rules: checked box select value where the rule is applied

> **Warning**
>
> High speed * large size may cause your computer feel like running Visual Studio...


<br />


<a name="folder"></a>
## 5. Folder
<pre>
src
├── App.jsx
├── components
│   ├── Cell.jsx
│   ├── controls
│   │   ├── BtnPlayPause.jsx
│   │   ├── BtnReset.jsx
│   │   ├── Checkbox.jsx
│   │   ├── Populate.jsx
│   │   ├── Rules.jsx
│   │   ├── SizeRange.jsx
│   │   └── SpeedRange.jsx
│   ├── Controls.jsx
│   └── Layout.jsx
├── main.jsx
├── models
│   ├── Cell.js
│   ├── Field.js
│   ├── Game.js
│   ├── gameVarConst.js
│   └── setup.js
└── styles
    ├── App.css
    ├── Cell.css
    ├── Controls.css
    ├── fonts
    │   ├── crossten-extralight-webfont.woff
    │   └── crossten-extralight-webfont.woff2
    ├── index.css
    └── Layout.css
</pre>



<br />


<a name="upcoming"></a>
## 6. Upcoming changes
+ change props drill pattern to context
+ fix Play/Pause bugs when changing parameters
+ enable 'Fertile' and 'Hostile' options


<br />


<a name="contact"></a>
## 7. Contact
Author : [AurelBouchard](mailto:au.bouchard@gmail.com)


<br />


<a name="license"></a>
## 8. License
MIT


