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