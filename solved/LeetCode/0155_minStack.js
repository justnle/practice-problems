/*
LeetCode #155

Design a stack that supports push, pop, top and retrieving the minimum
element in constant time.

Implement the MinStack class:
    - MinStack() initializes the stack object.
    - void push(val) pushes the element val onto the stack.
    - void pop() removes the element on the top of the stack.
    - int top() gets the top element of the stack.
    - int getMin() retrieves the minimum element in the stack.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

const MinStack = () => (this.stack = []);

MinStack.prototype.push = (val) => this.stack.push(val);

MinStack.prototype.pop = () => this.stack.pop();

MinStack.prototype.top = () => this.stack[this.stack.length - 1];

MinStack.prototype.getMin = () => Math.min(...this.stack);

// 372ms, faster than 9.39% of js submissions
// 47.2mb, less than 28.17 of js submissions
