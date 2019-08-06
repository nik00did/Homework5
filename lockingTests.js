describe('getCounterLocking()', () => {
    const testData = [
        {
            amountCall: 1,
            expected: 1
        },
        {
            amountCall: 2,
            expected: 2
        },
        {
            amountCall: 3,
            expected: 3
        },
        {
            amountCall: 4,
            expected: 4
        },
        {
            amountCall: 5,
            expected: 5
        },
        {
            amountCall: 10,
            expected: 10
        },
        {
            amountCall: 100,
            expected: 100
        },
        {
            amountCall: 1000,
            expected: 1000
        },
        {
            amountCall: 10000,
            expected: 10000
        },
        {
            amountCall: 100000,
            expected: 100000
        },
    ];

    testData.forEach(data => {
        const {amountCall, expected} = data;

        let counter = getCounterLocking();

        for (let i = 0; i < amountCall - 1; i++) {
            counter();
        }

        const actual = counter();

        it(`Should return ${expected}, when amount calls = ${amountCall}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('getFibonacciNumber()', () => {
    const testData = [
        {
            amountCall: 1,
            expected: 1
        },
        {
            amountCall: 2,
            expected: 2
        },
        {
            amountCall: 3,
            expected: 3
        },
        {
            amountCall: 4,
            expected: 5
        },
        {
            amountCall: 5,
            expected: 8
        },
        {
            amountCall: 6,
            expected: 13
        },
        {
            amountCall: 7,
            expected: 21
        },
        {
            amountCall: 8,
            expected: 34
        },
        {
            amountCall: 9,
            expected: 55
        },
        {
            amountCall: 10,
            expected: 89
        },
        {
            amountCall: 20,
            expected: 10946
        }
    ];

    testData.forEach(data => {
        const {amountCall, expected} = data;

        let func = getFibonacciNumber();

        for ( let i = 0; i < amountCall - 1; i++){
            func()
        }

        const actual = func();

        it(`Should return ${expected}, when amount calls = ${amountCall}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});