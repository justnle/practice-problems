/* eslint-disable space-before-function-paren */
/*
LeetCode #705 - Design HashSet - Easy

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:
    - void add(key) Inserts the value key into the HashSet
    - bool contains(key) Returns whether the value key exists
      in the HashSet or not.
    - void remove(key) Removes the value key in the HashSet. If
      key does not exist in the HashSet, do nothing.

Example 1:
Input: [
       "MyHashSet","add","add","contains","contains","add",
       "contains","contains","remove","contains"
       ],
       [[],[1],[2],[1],[3],[2],[2],[2],[1],[2]]
Output: [null,null,null,false,true,null,true,false,true,false]
*/
function MyHashSet() {
    this.hashSet = {};
}

MyHashSet.prototype.add = function (key) {
    this.hashSet[key] = key;
};

MyHashSet.prototype.remove = function (key) {
    delete this.hashSet[key];
};

MyHashSet.prototype.contains = function (key) {
    return this.hashSet.hasOwnProperty(key);
};
