/*
LeetCode #380

Implement the RandomizedSet class:
- RandomizedSet() initializes the RandomizedSet object
- bool insert(int val) inserts an item val into the set if not present.
  Returns true if the item was not present, false otherwise.
- bool remove(int val) removes an item val from the set if present.
  Returns true if the item was present, false otherwise.
- int getRandom() returns a random element from the current set of elements
  (it's guaranteed that at least one element exists when this method is called).
  Each element must have the same probability of being returned.

You must implement the functions of the class such that each functions works in
average O(1) time complexity.

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert",
"getRandom"]
[[], [1], [2], [2], [], [1], [2], []]

Output
[null, true, false, true, 2, true, false, 2]
*/

const RandomizedSet = () => {
    this.arr = [];
};

RandomizedSet.prototype.insert = (val) => {
    const index = this.arr.indexOf(val);

    if (index === -1) {
        this.arr.push(val);
        return true;
    } else {
        return false;
    }
};

RandomizedSet.prototype.remove = (val) => {
    const index = this.arr.indexOf(val);

    if (index !== -1) {
        this.arr.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

RandomizedSet.prototype.getRandom = () => {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

// class RandomizedSet {
//     constructor() {
//         this.arr = [];
//     }

//     insert(val) {
//         const index = this.arr.indexOf(val);

//         if (index !== -1) {
//             this.arr.splice(index, 1);
//             return true;
//         } else {
//             return false;
//         }
//     }

//     remove(val) {
//         const index = this.arr.indexOf(val);

//         if (index !== -1) {
//             this.arr.splice(index, 1);
//             return true;
//         } else {
//             return false;
//         }
//     }

//     getRandom() {
//         return this.arr[Math.floor(Math.random() * this.arr.length)];
//     }
// }

// module.exports = RandomizedSet;

// 448ms, faster than 46.67% of js submissions
// 87.6mb less than 90.48% of js submissions
