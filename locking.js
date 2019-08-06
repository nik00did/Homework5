const getCounterLocking = () => {
    let counter = 0;

    return function () {
        return ++counter;
    };
};

const getFibonacciNumber = () => {
    let first = 0;
    let second = 1;

    return function () {
        let temp = second;
        second += first;
        first = temp;
        return second;
    };
};