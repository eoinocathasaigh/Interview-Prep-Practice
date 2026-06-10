Data Structures are one of the most important parts of programming.
There exists multiple which each come with their own unique benifits and weaknesses

<h2>Data Structures</h2>
Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They provide a means to manage large amounts of data and perform operations on that data effectively. Different data structures are designed to handle different types of data and operations, and choosing the right data structure can significantly impact the performance of a program.

<h3>Refreshing on Space and Time Complexity</h3>
<b>Space Complexity</b> refers to the amount of memory used by an algorithm or data structure, effectively it measures the amount of space required to store the data and any additional space needed for processing.

<b>Time Complexity</b> refers to the amount of time an algorithm takes to complete as a function of the size of the input data. It is often expressed using Big O notation, which describes the upper bound of the time required for an algorithm to run.

<b>Big O Notation</b> is used to describe the performance or complexity of an algorithm. It provides an upper bound on the growth rate of an algorithm's time or space requirements as the input size increases. Common time complexities include:
- <b>O(1): Constant time</b> - the algorithm takes the same amount of time regardless of the input size.
- <b>O(log n): Logarithmic time</b> - the algorithm's time increases logarithmically as the input size increases.
- <b>O(n): Linear time</b> - the algorithm's time increases linearly with the input size.
- <b>O(n log n): Log-linear time</b> - the algorithm's time increases in proportion to n log n, often seen in efficient sorting algorithms.
- <b>O(n^2): Quadratic time</b> - the algorithm's time increases quadratically with the input size, often seen in nested loops.
- <b>O(2^n): Exponential time</b> - the algorithm's time doubles with each additional element in the input, often seen in recursive algorithms that solve problems by dividing them into smaller subproblems.

<h2>Arrays</h2>
Fundamental and linear data structure which stores elements in contiguous locations.
Arrays have a fixed size and allow for fast access to elements using an index. However, they can be inefficient for inserting and deleting elements, as it may require shifting elements. Arrays are commonly used for storing and manipulating collections of data, such as lists of numbers or strings.

Arrays are also used in various algorithms, such as sorting and searching algorithms, where they provide efficient access to elements. They can be one-dimensional (1D) or multi-dimensional (2D, 3D, etc.), depending on the requirements of the problem being solved.

The space and time complexity of arrays varys greatly based on the operation being performed. Accessing an element by index is O(1), while inserting or deleting an element can be O(n) in the worst case due to the need to shift elements. Searching for specific elements can also be O(n) in the worst case, unless the array is sorted, in which case binary search can be used to achieve O(log n) time complexity.

Maximum Subarray variations & Range Product Problems = Prefix + Suffix accumulation (All before a certain point & all after together)