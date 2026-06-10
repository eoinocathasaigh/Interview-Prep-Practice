//The following is meant to be a file which demonstrates how to manipulate/interact with arrays in javascript
//Creating an array
let myArray = [1, 2, 3, 4, 5];

//Accessing elements in an array
console.log(myArray[0]); //Output: 1
console.log(myArray[2]); //Output: 3

//Modifying elements in an array
myArray[1] = 10;
console.log(myArray); //Output: [1, 10, 3, 4, 5]

//Question: What is the O(n) time complexity of accessing an element in an array?
//Answer: The time complexity of accessing an element in an array is O(1) because it is a direct access operation. However, if we are searching for an element in the array, the time complexity would be O(n) because we may have to check each element until we find the desired one.

//Adding elements to an array
myArray.push(6); //Adds 6 to the end of the array
console.log(myArray); //Output: [1, 10, 3, 4, 5, 6]

//Removing elements from an array
myArray.pop(); //Removes the last element (6) from the array
console.log(myArray); //Output: [1, 10, 3, 4, 5]

//Finding the length of an array
console.log(myArray.length); //Output: 5

//Iterating through an array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//Using forEach to iterate through an array
myArray.forEach(element => {
    console.log(element);
});

//Using map to create a new array based on the original array
let newArray = myArray.map(element => element * 2);
console.log(newArray); //Output: [2, 20, 6, 8, 10]

//Using filter to create a new array with elements that meet a certain condition
let filteredArray = myArray.filter(element => element > 3);
console.log(filteredArray); //Output: [10, 4, 5]

//Using reduce to accumulate values in an array
let sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); //Output: 23

//INTERVIEW QUESTION: How would you reverse an array in place without using any built-in methods?
function reverseArray(arr) {
    let left = 0;
    //Making sure the last digit we track isnt out of bounds
    let right = arr.length - 1;

    while (left < right) {
        //Swap elements at left and right indices
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        //Move towards the middle
        left++;
        right--;
    }
    return arr;
}

//The main algorithm being highlighted here is that of moving from two points in the array and swapping elements until we meet in the middle. 
//This allows us to reverse the array in place with a time complexity of O(n) and a space complexity of O(1).

console.log(reverseArray(myArray)); //Output: [5, 4, 3, 10, 1]

//Qestion 2: How would you find the maximum value in an array without using any built-in methods?
function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    let max = arr[0]; // Initialize max to the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }
    return max;
}

console.log(findMax(myArray)); //Output: 10

//Question 3: How would you remove duplicates from an array without using any built-in methods?
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break; // Break inner loop if duplicate is found
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]); // Add to uniqueArray if not a duplicate
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); //Output: [1, 2, 3, 4, 5]
//Note - this method can also be achieved using a set or HashMap
//This approach simply demonstrates how it may be done using only arrays and loops - leading to an O(n^2) time complexity due to the nested loops.

//Question 4: How would you rotate an array to the right by k steps without using any built-in methods?
function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    let rotatedArray = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        let newIndex = (i + k) % arr.length; // Calculate new index for each element
        rotatedArray[newIndex] = arr[i]; // Place element in its new position
    }
    return rotatedArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); //Output: [4, 5, 1, 2, 3]
//This method creates a new array and places each element in its new position based on the rotation. 
//The time complexity is O(n) and the space complexity is O(n) due to the additional array used for rotation.

//Question 5: How would you check if two arrays are equal without using any built-in methods?
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Arrays of different lengths cannot be equal
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; // If any elements differ, arrays are not equal
        }
    }
    return true; // All elements are equal
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); //Output: true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); //Output: false
//This method checks for equality by first comparing the lengths of the arrays and then comparing each corresponding element. 
//The time complexity is O(n) where n is the length of the arrays.

//Binary Search Implementation
//What is binary search?
//Binary search is an efficient algorithm for finding the position of a target value within a sorted array.
//It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the search continues in the lower half, or if the value is greater, it continues in the upper half. 
//This process continues until the value is found or the interval is empty.
//This implementation of binary search assumes that the input array is sorted. The time complexity is O(log n) due to the halving of the search space with each iteration, and the space complexity is O(1) for the iterative version.
function binarySearch(arr, target) {
    //Setting the index of the two halfes of the array
    //Left always starts at beginning of the array - 0
    let left = 0;
    //Right starts at the end - length -1 to avoid out of bounds error
    let right = arr.length - 1;

    //While the left index is less than or equal to the right index, we continue searching
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Calculate the middle index

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found in the array
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); //Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //Output: -1

//Question 6: How would you implement a function to find the intersection of two arrays without using any built-in methods?
function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // Check if the element is already in the result array to avoid duplicates
                let isDuplicate = false;
                for (let k = 0; k < result.length; k++) {
                    if (result[k] === arr1[i]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    result.push(arr1[i]); // Add to result if it's not a duplicate
                }
            }
        }
    }
    return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); //Output: [3, 4]
//This method checks for common elements between the two arrays and adds them to the result array while ensuring no duplicates are added. 
//The time complexity is O(n*m) where n and m are the lengths of the two input arrays.

//Question 7: Product of Array Except Self
//Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
function productExceptSelf(nums) {
    let length = nums.length;
    let output = new Array(length).fill(1); // Initialize output array with 1s

    // Calculate the product of all elements to the left of each index
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        output[i] = leftProduct; // Set output[i] to the product of elements to the left
        leftProduct *= nums[i]; // Update leftProduct for the next iteration
    }

    // Calculate the product of all elements to the right of each index and multiply with the left product
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        output[i] *= rightProduct; // Multiply with the product of elements to the right
        rightProduct *= nums[i]; // Update rightProduct for the next iteration
    }

    return output;
}

console.log(productExceptSelf([1, 2, 3, 4])); //Output: [24, 12, 8, 6]
//This method calculates the product of all elements to the left and right of each index and combines them to get the final output. 
//The time complexity is O(n) and the space complexity is O(1) if we ignore the output array.