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
        return false;
    }

    if (target < array[0] || target > array[array.length - 1]) {
        return false;
    }

    finish = !finish ? array.length - 1 : finish;
    const middle = Math.floor((start + finish) / 2);

    if (target === array[middle] ) {
        return true;
    }

    if (start === finish - 1 && target !== array[start] && target !== array[finish]) {
        return false;
    } else if (target === array[start] || target === array[finish]) {
        return true;
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
