/*
HackerRank

You are given an unordered array consisting of consecutive
integers [1,2,3,...,n] without any duplicates. You are allowed
to swap any two elements. Find the minimum number of swaps
required to sort the array in ascending order.

Example
arr = [7,1,3,2,4,5,6]

0 [7,1,3,2,4,5,6]   swap indices (0,3)
1 [2,1,3,7,4,5,6]   swap indices (0,1)
2 [1,2,3,7,4,5,6]   swap indices (3,4)
3 [1,2,3,4,7,5,6]   swap indices (4,5)
4 [1,2,3,4,5,7,6]   swap indices (5,6)
5 [1,2,3,4,5,6,7]

It took 5 swaps to sort the array
*/

const minimumSwaps = (arr) => {
    let swaps = 0;

    for (let index = 0; index < arr.length; ++index) {
        while (index + 1 !== arr[index]) {
            const swapIndex = arr[index] - 1;
            const valAtIndex = arr[index];
            const valAtSwapIndex = arr[swapIndex];

            arr[index] = valAtSwapIndex;
            arr[swapIndex] = valAtIndex;
            ++swaps;
        }
    }
    return swaps;
};

minimumSwaps([1, 4, 3, 2]);
minimumSwaps([4, 3, 1, 2]);
minimumSwaps([2, 3, 4, 1, 5]);
