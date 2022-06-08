/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/*
LeetCode #232 - Implement Queue using Stacks - Easy

Implement a first in first out (FIFO) queue using only two stacks.
The implemented queue should support all of a normal queue
(push, peek, pop, and empty).

Implement the MyQueue class:
    - void push(int x) Pushes element x to the back of the queue.
    - int pop() Removes the element from the front of the queue and returns it
    - int peek() Returns the element at the front of the queue.
    - boolean empty() Returns true if the queue is empty, false otherwise.

Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/

const MyQueue = () => (this.stack = []);

MyQueue.prototype.push = (x) => this.stack.push(x);
MyQueue.prototype.pop = () => this.stack.shift();
MyQueue.prototype.peek = () => this.stack[0];
MyQueue.prototype.empty = () => (this.stack.length > 0 ? false : true);

const obj = new MyQueue();
obj.push(x);

const param_2 = obj.pop();
const param_3 = obj.peek();
const param_4 = obj.empty();

// 72ms, faster than 73.81% of js submissions
// 38.8mb, less than 13.59% of js submissions
