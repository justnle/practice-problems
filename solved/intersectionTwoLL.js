/*
LeetCode #160

Given the heads of two singly linked-lists headA and headB, return
the node at which the two lists intersect. If the two linked lists have
no intersection at all, return null.
*/

const getIntersectionNode = (headA, headB) => {
    let p1 = headA;
    let p2 = headB;

    if (!headA || !headB) {
        return null;
    }

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;

        if (p1 === p2) {
            return p1;
        }

        if (!p1) {
            p1 = headB;
        }

        if (!p2) {
            p2 = headA;
        }
    }
    return p1;
};
