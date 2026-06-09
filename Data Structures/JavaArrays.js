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