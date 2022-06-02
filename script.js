"use strict";

// Задача 1
let arr = [
    23,
    43,
    47,
    55,
    65,
    74,
    94,
];

const sorter = function (arr) {
    arr.forEach(element => {
        if (element.toString()[0] == 2 || element.toString()[0] == 4) {
            console.log(element);
        }
    });
};

sorter(arr);

// Задача 2

let n = 100;

nextStep:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextStep;
    }

    console.log(i);
}


