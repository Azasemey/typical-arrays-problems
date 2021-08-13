"use strict";
const min = function min(array) {
    if (!array || array.length === 0) return 0;
    // First solution ----------------------------------
    return Math.min(...array);

    // Second solution
    // return array.reduce((acc, v) => (acc > v ? (acc = v) : acc));
};

console.log(
    min([
        2, -24, 13, -11, 16, -12, -16, 24, 13, -38, 19, -16, 19, 3, 2, 32, 0,
        -10, -19, -27,
    ])
);
