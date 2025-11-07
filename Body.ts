// sample body

import {print} from "./print_function"


print("Hello World");


const sampleArray = [1,2,3,4,5,6,7,8,9,10];

function SumInArray(array1: number[]){
    return array1.reduce((total: any, current: any) => total + current , 0)

}

print(SumInArray(sampleArray));
