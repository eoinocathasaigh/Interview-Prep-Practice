//This file will tackle some basic interview questions in JavaScript
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

//2. Slding window pattern - "Maximum Sum Subarray of Size K"
//This is another classic question which prompts you to find the maximum sum of a subarray of size K
//A brute force approach would involve calculating the sum of every possible subarray of size K, resulting in O(n*k) time complexity
//However, we can optimize this using the sliding window technique, which allows us to calculate the sum in O(n) time complexity

function maxSumSubarrayOfSizeK(arr, k) {
    let maxSum = 0; // Variable to store the maximum sum found
    let windowSum = 0; // Variable to store the current window sum

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i]; // Add the current element to the window sum

        if (i >= k - 1) { // Once we have a full window of size K
            maxSum = Math.max(maxSum, windowSum); // Update maxSum if current window sum is greater
            windowSum -= arr[i - (k - 1)]; // Subtract the element that is sliding out of the window
        }
    }

    return maxSum; // Return the maximum sum found

    let n = arr.length;
    if (n < k) return -1;

    // compute sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // slide the window
    for (let i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage:
const arr2 = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarrayOfSizeK(arr2, k)); // Output: 9 (subarray [5, 1, 3])