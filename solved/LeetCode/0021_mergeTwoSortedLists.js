/*
LeetCode #21 - Merge Two Sorted Lists - Easy

Merge two sorted linked lists and return it as a sorted list.
The list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
*/

const mergeTwoLists = (l1, l2) => {
    const dummyHead = new ListNode();
    let p = dummyHead;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    while (l1) {
        p.next = l1;
        l1 = l1.next;
        p = p.next;
    }

    while (l2) {
        p.next = l2;
        l2 = l2.next;
        p = p.next;
    }
    return dummyHead.next;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]); // [1,1,2,3,4,4];

// 80ms
// 40.6mb
