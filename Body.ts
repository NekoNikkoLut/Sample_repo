// sample body

import {print} from "./print_function"


print("Hello World");


const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumberList = numberList.filter((number) => number % 2 === 0);
print(evenNumberList);


const oddNumberList = numberList.filter((number) => number % 2 !== 0);
print(oddNumberList);

const sumOfEvenNumberList = evenNumberList.reduce((sum, number) => sum + number, 0);
print(sumOfEvenNumberList);

const sumOfOddNumberList = oddNumberList.reduce((sum, number) => sum + number, 0);
print(sumOfOddNumberList);

const averageOfEvenNumberList = sumOfEvenNumberList / evenNumberList.length;
print(averageOfEvenNumberList);

const averageOfOddNumberList = sumOfOddNumberList / oddNumberList.length;
print(averageOfOddNumberList);

const averageOfAllNumberList = (sumOfEvenNumberList + sumOfOddNumberList) / (evenNumberList.length + oddNumberList.length);
print(averageOfAllNumberList);

const maxOfEvenNumberList = evenNumberList.reduce((max, number) => Math.max(max, number), 0);
print(maxOfEvenNumberList);

//He
const minOfOddNumberList = oddNumberList.reduce((min, number) => Math.min(min, number), 0);
print(minOfOddNumberList);

// max of all number list
const maxOfAllNumberList = numberList.reduce((max, number) => Math.max(max, number), 0);
print(maxOfAllNumberList);

// min of all number list
const minOfAllNumberList = numberList.reduce((min, number) => Math.min(min, number), 0);
print(minOfAllNumberList);

//My name is neil nikko Lut
//my name is neil nikko Lut

"print 500 randome names and store in a list"

const randomNames = Array.from({length: 500}, () => Math.random().toString(36).substring(2, 15));
const randomNamesList = randomNames.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
print(randomNamesList);