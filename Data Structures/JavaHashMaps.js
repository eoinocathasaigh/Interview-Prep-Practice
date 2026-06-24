//This file will tackle some basic questions relating to hash maps in JavaScript
//1. HashMap pattern - "Pairs with Target Sum"
//This is a classic question which essentially prompts you to find two numbers in an array that add to a given target sum
//While at first you may think of using a brute force approach (2 loops resulting in O(n^2) time complexity), we can actually solve this problem in O(n) time complexity using a hash map
//How this works is by creating a hash map to store the numbers we've seen so far
//Then from here we check if the compliment of the current number (target - current number) exists in the hash map
//If it does, we have found a pair that sums to the target and we can return it

function pairsWithTargetSum(arr, target) {
    const numMap = new Map(); // Create a new hash map to store numbers and their indices
    const result = []; // Array to store the pairs that sum to the target

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]; // Calculate the complement that would sum to the target

        if (numMap.has(complement)) { // Check if the complement exists in the hash map
            result.push([complement, arr[i]]); // If it does, add the pair to the result array
        }

        numMap.set(arr[i], i); // Store the current number and its index in the hash map
    }

    return result; // Return all pairs that sum to the target
}

// Example usage:
const arr = [2, 7, 11, 15];
const target = 9;
console.log(pairsWithTargetSum(arr, target)); // Output: [[2, 7]]