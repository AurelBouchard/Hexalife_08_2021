# Hexalife
## HEXAGONAL VERSION OF THE FAMOUS GAME OF LIFE

### naming convention
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

### rules
+ a new living unit is generated in an empty cell surrounded by at least 3 living units (options may modify that value)
+ a living unit will die if it's surrounded by 5 or more living units (options may modify that value)

<br />

<pre>
  cell :  | fertile   | neutral   | hostile
--------------------------------------------
  spawn   | 2 and +   | 3 and +   | 4 and +
  die     | 1, 5 or 6 | 1, 2, 5, 6| 1, 2, 3, 5, 6
</pre>


## LAYERS
 let consider that the first cell is at layer 0
 each cells surrounding that first one are on layer 1
 there is 6 cells at layer 1, 12 cells at layer 2, and so on ...

<br />

## NUMBERING : NESTING THE CELLS
 the first cell is a kind of origin 0 of the field, its number is 0 (id=0)
 the cells in first layer around the 0 are numbered from 1 to 6
 1 is the cell on top of 0, then numbers follow clockwise
 then the numbering go clockwise around the minimum value of the last layer, here it's 1 :
 on top of 1 comes the next cell value here it's 7, then 8 comes between 7, 2 and 1.
 now number should go in place of 2 ! no, the code check clockwise the next unnumbered cell,
 0 : no, 6 : no, empty => 9.
 now 1 have all neighbours : 7, 8, 2, 0, 6, 9 (order is REALLY important to keep the net on a 2 dimensions plan)
 now go to the next cell in layer 1 : 2
 check clockwise, start on top (index 0 of array):

<br />

#### option : display pattern on html page


#### generate step 0 of life : random placement of n living units



