//This file will tackle some basic interview questions in JavaScript
//1. HashMap pattern - "Pairs with Target Sum"
//This is a classic question which essentially prompts you to find two numbers in an array that add to a given target sum
//While at first you may think of using a brute force approach (2 loops resulting in O(n^2) time complexity), we can actually solve this problem in O(n) time complexity using a hash map
//How this works is by creating a hash map to store the numbers we've seen so far
//Then from here we check if the complement of the current number (target - current number) exists in the hash map
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

//2. Sliding window pattern - "Maximum Sum Subarray of Size K"
//This is another classic question which prompts you to find the maximum sum of a subarray of size K
//A brute force approach would involve calculating the sum of every possible subarray of size K, resulting in O(n*k) time complexity
//However, we can optimize this using the sliding window technique, which allows us to calculate the sum in O(n) time complexity

function maxSumSubarrayOfSizeK(arr, k) {
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

//3. Two Pointers pattern - "Container With Most Water"
//This problem prompts you to find two lines in an array that together with the x-axis form a container that holds the most water
//A brute force approach would involve checking every possible pair of lines, resulting in O(n^2) time complexity
//However, we can optimize this using the two pointers technique, which allows us to find the maximum area in O(n) time complexity

//The main idea here is to use two pointer variables, one at the start of the array and one at the end
//The pointers move towards each other, and at each step we calculate the area formed by the lines at the two pointers
//We keep track of the maximum area found so far, and we move the pointer that points to the shorter line, since moving the taller line would not increase the area
//This process continues until the two pointers meet - this process ensures we just pass through the array once, resulting in O(n) time complexity

function maxArea(arr) {
    let left = 0, right = arr.length - 1;
    let res = 0;
    while (left < right) {
        
        // find the water stored in the container between 
        // arr[left] and arr[right]
        let water = Math.min(arr[left], arr[right]) * (right - left);
        res = Math.max(res, water);
        
        if (arr[left] < arr[right])
            left += 1;
        else
            right -= 1;
    }
  
    return res;
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output: 49 (between lines at index 1 and index 8)

