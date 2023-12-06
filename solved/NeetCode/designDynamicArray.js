/*
Design a Dynamic Array class, such as an ArrayList in Java or a Vector in C++.

Your DynamicArray class should support the following operations:
- DynamicArray(int capacity) will initialize an empty array
  with a capacity of capacity, where capacity > 0.
- int get(int i) will return the element at index i. Assume
  that index i is valid.
- void set(int i, int n) will set the element at index i to n.
  Assume that index i is valid.
- void pushback(int n) will push the element n to the end of the array.
- int popback() will pop and return the element at the end of the array.
  Assume that the array is non-empty.
- void resize() will double the capacity of the array.
- int getSize() will return the number of elements in the array.
- int getCapacity() will return the capacity of the array.

If we call void pushback(int n) but the array is full,
we should resize the array first.

Example 1:
Input: ["Array", 1, "getSize", "getCapacity"]
Output: [null, 0, 1]

Example 2:
Input: ["Array", 1, "pushback", 1, "getCapacity", "pushback", 2, "getCapacity"]
Output: [null, null, 1, null, 2]

Example 3:
Input: ["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize",
        "getCapacity", "pushback", 2, "getSize", "getCapacity", "get",
        1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"]
Output: [null, 0, 1, null, 1, 1, null, 2, 2, 2, null, 3, 3, 1, 2]

Note:
- The index i provided to get(int i) and set(int i) is guaranteed to be greater
  than or equal to 0 and less than the number of elements in the array.
*/

class DynamicArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(capacity);
    }

    get(i) {
        return this.array[i];
    }

    set(i, n) {
        this.array[i] = n;
    }

    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }

        this.array[this.size] = n;
        this.size++;
    }

    popback() {
        this.size--;
        return this.array[this.size];
    }

    resize() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);

        for (let i = 0; i < this.size; ++i) {
            newArray[i] = this.array[i];
        }

        this.array = newArray;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}

const array = new DynamicArray(1);
array.getSize(); // 0
array.getCapacity(); // 1
array.pushback(1);
array.getCapacity(); // 1
array.pushback(1);
array.getCapacity(); // 2
array.getSize(); // 2
array.get(1); // 1
array.set(1, 3);
array.get(1); // 3
array.popback(); // 3
array.getSize(); // 1
