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

const sumOfAllNumberList = numberList.reduce((sum, number) => sum + number, 0);
print(sumOfAllNumberList);

const averageOfAllNumberList = sumOfAllNumberList / numberList.length;
print(averageOfAllNumberList);