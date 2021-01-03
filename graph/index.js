/*
   2 - 0
  /\
 1 -3

Edge List
*/

const graph1 = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
];

// Ajacent List

//              0     1      2          3
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Hash table

const graph3 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 2],
    3: [1, 2]
}


// Adjacent Matrix
const graphMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
};


