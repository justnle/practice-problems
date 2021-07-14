const getIntersectionNode = (headA, headB) => {
    const hash = {};

    for (const num of headA) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            hash[num] += 1;
        }
    }

    console.log(hash);
};

getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]);

/*
pseudocode
find the number 
*/
