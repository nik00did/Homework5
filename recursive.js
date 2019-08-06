const getFactorial = number => {
    if (number < 1 || !number) {
        return `_Wrong input number!_`;
    }

    if (number !== 1) {
        return number * getFactorial(number - 1 );
    }

    return number;
};

const getFibonacciNumbers = numberElement => {

    if (!numberElement || numberElement < 0) {
        return `_Wrong input number!_`;
    }

    return numberElement <= 1 ? 0
         : numberElement <= 2 ? 1
         : getFibonacciNumbers(numberElement - 1) + getFibonacciNumbers(numberElement - 2);
};

const binarySearch = (array, target, start = 0, finish = 0) => {
    if (!array || (!target && target !== 0)) {
        return `_Wrong input arguments of array or target!_`
    }

    if (target < array[0] || target > array[array.length - 1]) {
        return `_Not found! Array [${array}] doesn't have the target "${target}"!_`;
    }

    finish = !finish ? array.length - 1 : finish;
    const middle = Math.floor((start + finish) / 2);

    if (target === array[middle] ) {
        return `_Target is found on ${middle} position_`;
    }

    if (start === finish - 1 && target !== array[start] && target !== array[finish]) {
        return `_Not found target ${target}!_`;
    } else if (target === array[start]) {
        return `_Target is found on ${start} position_`;
    } else if (target === array[finish]){
        return `_Target is found on ${finish} position_`;
    }


    if (target > array[middle]) {
        return binarySearch(array, target, middle, finish);
    }

    if (target < array[middle]) {
        return binarySearch(array, target, start, middle);
    }

};
//
// let array = [1, 2, 3, 4, 5];
// console.log(binarySearch(null, 5));
