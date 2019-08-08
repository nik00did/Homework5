describe('BSTree', () => {
    describe('init()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 4, 8, 5, 3, 4, 5],
                expected: [1, 2, 3, 4, 4, 5, 5, 8]
            },
            {
                array: [0],
                expected: [0]
            },
            {
                array: [],
                expected: []
            },
            {
                array: undefined,
                expected: `_Wrong input array!_`
            },
            {
                array: null,
                expected: `_Wrong input array!_`
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let tree = new BSTree();

            const actual = tree.init(array);

            it(`Should return [${expected}], when array = [${array}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: 5
            },
            {
                array: [1, 2, 3, 4, 4, 5, 5, 8],
                expected: 8
            },
            {
                array: [0],
                expected: 1
            },
            {
                array: [],
                expected: 0
            },
            {
                array: [1, 2],
                expected: 2
            },
            {
                array: [1, 2, 3],
                expected: 3
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let tree = new BSTree();
            tree.init(array);
            const actual = tree.getSize();

            it(`Should return [${expected}], when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('toString()', () => {
        const testData = [
            {
                array: [],
                expected: '[]'
            },
            {
                array: [1],
                expected: '[1]'
            },
            {
                array: [2],
                expected: '[2]'
            },
            {
                array: [1, 2],
                expected: '[1, 2]'
            },
            {
                array: [1, 2, 3],
                expected: '[1, 2, 3]'
            },
            {
                array: [1, 3, 5, 7, 9],
                expected: '[1, 3, 5, 7, 9]'
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let tree = new BSTree();
            tree.init(array);

            const actual = tree.toString();

            it(`Should return ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('toArray()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 3, 4, 4, 5, 5, 8],
                expected: [1, 2, 3, 4, 4, 5, 5, 8]
            },
            {
                array: [0],
                expected: [0]
            },
            {
                array: [],
                expected: []
            },
            {
                array: [1, 2, 3],
                expected: [1, 2, 3]
            },
            {
                array: [1, 2],
                expected: [1, 2]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let tree = new BSTree();
            tree.init(array);

            const actual = tree.toArray();

            it(`Should return ${expected}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('push()', () => {
        const testData = [
            {
                array: [1],
                element: 2,
                expected: {
                    array: [1, 2],
                    length: 2
                }
            },
            {
                array: [],
                element: 1,
                expected: {
                    array: [1],
                    length: 1
                }
            },
            {
                array: [1, 2, 3],
                element: 1,
                expected: {
                    array: [1, 1, 2, 3],
                    length: 4
                }
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                element: 4,
                expected: {
                    array: [1, 2, 3, 4, 4, 5, 6],
                    length: 7
                }
            },
            {
                array: [1, 2, 3, 4, 5, 5, 5, 5, 6],
                element: 5,
                expected: {
                    array: [1, 2, 3, 4, 5, 5, 5, 5, 5, 6],
                    length: 10
                }
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                element: undefined,
                expected: {
                    array: [1, 2, 3, 4, 5, 6],
                    length: 6
                }
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                element: null,
                expected: {
                    array: [1, 2, 3, 4, 5, 6],
                    length: 6
                }
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                element: 0,
                expected: {
                    array: [0, 1, 2, 3, 4, 5, 6],
                    length: 7
                }
            },
            {
                array: [],
                element: 0,
                expected: {
                    array: [0],
                    length: 1
                }
            },
            {
                array: [],
                element: 1,
                expected: {
                    array: [1],
                    length: 1
                }
            }
        ];

        testData.forEach(data => {
            const {array, element, expected} = data;

            let tree = new BSTree();
            tree.init(array);
            let length = tree.push(element);

            const actual = {
                array: tree.toArray(),
                length: length
            };

            it(`Should return array length ${expected.length} and change array tree to ${expected.array}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('remove()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 4,
                expected: [1, 2, 3, 5, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 5,
                expected: [1, 2, 3, 4, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 1,
                expected: [2, 3, 4, 5, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 6,
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 5,
                expected: [1, 2, 3, 4, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 10,
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: 0,
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: undefined,
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                value: null,
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                array: [0, 1, 2, 3, 4, 5, 6],
                value: 0,
                expected: [1, 2, 3, 4, 5, 6]
            },
        ];

        testData.forEach(data => {
            const {array, value, expected} = data;

            let tree = new BSTree();
            tree.init(array);

            const actual = tree.remove(value);

            it(`Should return [${expected}], when delete value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getBalance()', () => {
        const tesdData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 3],
                expected: [1, 2, 3]
            },
            {
                array: [1, 2],
                expected: [1, 2]
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2, 4, 3, 5, 2, 6],
                expected: [1, 2, 2, 3, 4, 5, 6]
            },
            {
                array: [],
                expected: []
            }
        ];

        tesdData.forEach(data => {
            const {array, expected} = data;

            let tree = new BSTree();
            tree.init(array);

            const actual = tree.getBalanced();

            it(`Should return ${expected}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
});