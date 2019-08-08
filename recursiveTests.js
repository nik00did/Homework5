describe('getFactorial()', () => {
    const testData = [
        {
            number: 0,
            expected: '_Wrong input number!_'
        },
        {
            number: undefined,
            expected: '_Wrong input number!_'
        },
        {
            number: null,
            expected: '_Wrong input number!_'
        },
        {
            number: 1,
            expected: 1
        },
        {
            number: 2,
            expected: 2
        },
        {
            number: 3,
            expected: 6
        },
        {
            number: 4,
            expected: 24
        },
        {
            number: 5,
            expected: 120
        },
        {
            number: 10,
            expected: 3628800
        },
    ];

    testData.forEach(data => {
        const {number, expected} = data;

        const actual = getFactorial(number);

        it(`Should return ${expected} from number = ${number}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getFibonacciNumbers()', () => {
    const testData = [
        {
            numberElement: -100,
            expected: '_Wrong input number!_'
        },
        {
            numberElement: -10,
            expected: '_Wrong input number!_'
        },
        {
            numberElement: -1,
            expected: '_Wrong input number!_'
        },
        {
            numberElement: 0,
            expected: '_Wrong input number!_'
        },
        {
            numberElement: 1,
            expected: 0
        },
        {
            numberElement: 2,
            expected: 1
        },
        {
            numberElement: 3,
            expected: 1
        },
        {
            numberElement: 4,
            expected: 2
        },
        {
            numberElement: 5,
            expected: 3
        },
        {
            numberElement: 6,
            expected: 5
        },
        {
            numberElement: 7,
            expected: 8
        },
        {
            numberElement: 8,
            expected: 13
        },
        {
            numberElement: 9,
            expected: 21
        },
        {
            numberElement: 10,
            expected: 34
        },
        {
            numberElement: 20,
            expected: 4181
        },
        {
            numberElement: 30,
            expected: 514229
        }
    ];

    testData.forEach(data => {
        const {numberElement, expected} = data;

        const actual = getFibonacciNumbers(numberElement);

        it(`Should return ${expected}, when number element = ${numberElement}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('binarySearch', () => {
    const testData = [
        {
            array: [1, 2, 3, 4, 5],
            target: 3,
            expected: true
        },
        {
            array: [1, 2, 3, 4, 5],
            target: 1,
            expected: true
        },
        {
            array: [1, 2, 3, 4, 5],
            target: 5,
            expected: true
        },
        {
            array: [1, 2, 3, 4, 5],
            target: 2,
            expected: true
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            target: 8,
            expected: true
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: 9,
            expected: true
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: 11,
            expected: false
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: -20,
            expected: false
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: 100,
            expected: false
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: 0,
            expected: false
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: 5.5,
            expected: false
        },
        {
            array: undefined,
            target: 5,
            expected: false
        },
        {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            target: undefined,
            expected: false
        },
        {
            array: undefined,
            target: undefined,
            expected: false
        },
        {
            array: null,
            target: 2,
            expected: false
        },
    ];

    testData.forEach(data => {
        const {array, target, expected} = data;

        const actual = binarySearch(array, target);

        it(`Should return ${expected}, when array = [${array}], target = ${target}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});