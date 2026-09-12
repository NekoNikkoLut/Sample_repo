// sample body

import {print} from "./print_function"


print("Hello World");


const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumberList = numberList.filter((number) => number % 2 === 0);
print(evenNumberList);
