function Node (value) {
    this._right = null;
    this._left = null;
    this._value = value;
}

function BSTree () {
    this._length = 0;
    this._root = null;
}

BSTree.prototype = Object.create(ProtoTree.prototype);
BSTree.prototype.constructor = BSTree;

BSTree.prototype.init = function (array) {
    if (!array){
        return `_Wrong input array!_`;
    }

    array.sort((a, b) => a - b);//на всякий случай чтоб дерево было точно сортированым

    const initTree = (array, start, finish) => {
        if (start > finish) {
            return null;
        }

        let middle = Math.floor((start + finish) / 2);
        let node = new Node(array[middle]);

        if (!this._root) {
            this._root = node;
        }

        node._left = initTree(array, start, middle - 1);
        node._right = initTree(array, middle + 1, finish);
        this._length++;
        return node;
    };

    initTree(array, 0, array.length - 1);

    return array;
};

BSTree.prototype.getSize = function () {
    return this._length;
};

BSTree.prototype.toString = function () {
    let string = '[';
    let array = this.toArray();

    for (let i = 0; i < this.getSize(); i++) {
        string += array[i];
        if (i !== this.getSize() - 1) {
            string += ', ';
        }
    }

    string += ']';
    return string;
};

BSTree.prototype.toArray = function () {
    if (!this.getSize()) {
        return [];
    }

    let array = [];
    let temp = this._root;

    const goTo = temp => {
        temp._left && goTo(temp._left);
        array.push(temp._value);
        temp._right && goTo(temp._right);
    };

    goTo(temp);
    return array;
};

BSTree.prototype.push = function (element) {
    if (!element && element !== 0) {
        return this.getSize();
    }

    let temp = this._root;
    let node = new Node(element);

    if (!temp) {
        this._root = node;
        this._length++;
        return this.getSize();
    }

    const tempPush = temp => {
        if (node._value > temp._value) {
            temp._right ? tempPush(temp._right) : temp._right = node;
        } else {
            temp._left ? tempPush(temp._left) : temp._left = node;
        }
    };

    tempPush(temp);
    this._length++;
    return this.getSize();
};

BSTree.prototype.remove = function (value) {
    let index = binarySearch(this.toArray(), value);
    if (!index && index !==0) {//!this.toArray().includes(value)
        return this.toArray();
    }

    let temp = this._root;

    const deleteNode = (temp, value) => {
        if (!temp) {
            return temp;
        } else if (temp._value > value) {
            temp._left = deleteNode(temp._left, value);
        } else if (temp._value < value) {
            temp._right = deleteNode(temp._right, value);
        } else if (temp._left && temp._right) {
            const findMinimum = node => !node._left ? node : findMinimum(node._left);
            temp._value = findMinimum(temp._right)._value;
            temp._right = deleteNode(temp._right, temp._value);
        } else {
            if (temp._left) {
                temp = temp._left;
            } else {
                temp = temp._right
            }
        }

        return temp;
    };

    this._root = deleteNode(temp, value);
    this._length--;
    return this.toArray();
};

BSTree.prototype.getBalanced = function () {
    let balancedArray =  this.toArray();

    this._root = null;
    this._length = 0;

    return this.init(balancedArray);
};

let tree = new BSTree();
console.log(tree.init([]));
//console.log(tree.remove(1));
console.log(tree.toArray());
console.log(tree.toString());