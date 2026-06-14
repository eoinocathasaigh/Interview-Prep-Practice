# Pattern Recognition
This is one of the key skills you can have when prepping for an interview. Or even in your day to day work as a software engineer. The ability to recognize patterns in problems and solutions can help you solve problems more efficiently and effectively. This involves examining the problem, the code, similarities to other problems you may have solved before to identify patterns that can be applied to the current problem.

There are many different types of patterns that can be recognized in programming and problem-solving. For coding interviews, 8 of the most common patterns are:
1. **Two Pointers** - This pattern involves using two pointers to traverse a data structure, such as an array or linked list, to solve problems efficiently. It is often used for problems involving searching, sorting, and partitioning.
2. **Sliding Window** - This pattern involves using a window of fixed or variable size to traverse a data structure, such as an array or string, to solve problems efficiently. It is often used for problems involving subarrays, substrings, and dynamic programming.
3. **Binary Search** - This pattern involves using a divide-and-conquer approach to search for a target value in a sorted data structure, such as an array or binary search tree. It is often used for problems involving searching, sorting, and optimization.
4. **Depth-First Search (DFS)** - This pattern involves exploring a graph or tree data structure by traversing as far as possible along each branch before backtracking. It is often used for problems involving graph traversal, pathfinding, and backtracking.
5. **Breadth-First Search (BFS)** - This pattern involves exploring a graph or tree data structure by traversing all the neighbors at the present depth prior to moving on to nodes at the next depth level. It is often used for problems involving graph traversal, shortest path, and level order traversal.
6. **Backtracking** - This pattern involves exploring all possible solutions to a problem by incrementally building candidates and abandoning them if they are not viable. It is often used for problems involving combinatorial optimization, constraint satisfaction, and puzzle solving.
7. **Dynamic Programming** - This pattern involves breaking down a problem into smaller subproblems and solving them recursively while storing the results to avoid redundant computations. It is often used for problems involving optimization, counting, and sequence alignment.
8. **Priority Queue / Heap** - This pattern involves using a priority queue or heap data structure to efficiently manage and retrieve elements based on their priority. It is often used for problems involving scheduling, graph algorithms, and optimization.

These categories are split into the 2 main categories of leetcode problems
- **Linear** - problems involving arrays, strings, and linked lists. These problems often require a linear traversal of the data structure and can be solved using techniques such as two pointers, sliding window, and dynamic programming.
- **Non-Linear** - problems involving trees, graphs, and other non-linear data structures. These problems often require more complex traversal techniques such as depth-first search, breadth-first search, and backtracking. They may also involve the use of priority queues or heaps to efficiently manage and retrieve elements.

## Linear Patterns
## Two Pointers
All algorithms that fall under linear structures start off with two pointers. They're incredibly effective as they allow us to significantly cut down on the time complexity of algorithms when compared to things like the brute force method of trying all possible combinations (e.g. when comparing two arrays/Searching for a value). It often allows us to solve things in O(n) time complexity.
Theres two main methods of using two pointers:
1. **Opposite Direction** - Typically used in problems where you are finding pairs or comparing elements from opposite ends of the data structure. Classic example includes the "Two Sum" problem, where you find two numbers in a sorted array that add up to a target value. One pointer starts at the beginning and the other starts at the end. By adjusting the pointers inward based on the sum enables us to quickly find the correct pair without checking every possible combination or performing unecessary comparisions.
2. **Same Direction** - This method involves using two pointers that start at the same position in a data structure and move in the same direction. Ideal for problems when you're solving the problem in a single pass through the data structure (e.g. finding the middle of an array, or finding cycles in a linked list). Common usage is through the slow and fast pointer method, where the slow pointer moves one step at a time and the fast pointer moves two steps at a time. This can be used to detect cycles in linked lists or to find the middle element of an array without retraversing the entire data structure.

## Sliding Window
This is an extension of the two pointers with a greater focus on maintaining a window of elements within the data and dynamically adjusting its size as you progress through the structure. Effectively using two pointers with the goal of managing a set/range of elements that meet some criteria. One pointer represents the start and one represents the end. Useful for questions where youre maximising the length of a substring or maintaining a sum within a target value. 

### Example - Finding the longest substring without repeating characters
Window expands to include new characters until a duplicate is found. At that point the starter pointer is moved forward to exclude the duplicate character. This system effectively allows the review of a string or data structure in a single pass (linear time) without retraversing multiple times.

Often this sort of approach is used in conjunction with a hash map or set to keep track of the elements within the window and their counts. This allows for efficient checking of whether an element is already present in the window and enables quick adjustments to the window size.

## Binary Search
This is a fundamental algorithm that is used to find a target value within a sorted array or data structure. It operates by repeatedly dividing the search interval in half, acting as a sort of expansion of the two pointers pattern because it uses a left and right pointer that half the list step by step. It starts by examining the item in the middle of the structure to check if its the target, if not it then moves the pointers to the left (if the target is smaller) or right (if the target is larger) until it finally converges on the target value or exhausts the search space. This algorithm is efficient with a time complexity of O(log n) and is often used in problems involving searching, sorting, and optimization.

Although it may be used on sorted numeric lists/arrays it can also be used in any sort of list where there exists a *Monotonic* function
- **Monotonic Function** - Any type of pattern with a consistent increase or decrease, which extends beyond just numbers - any condition which can use used for sorting. Can even be used for boolean values. 

Here is a brief example of a binary search implementation in Java:

```java
public static int binarySearch(int[] arr, int target) {
    //Starting on the left (first element) and right (last element) of the array
    int left = 0;
    int right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

### What makes something "Feasible" for binary search/When would we know to use it?
### Example - Find Minimum in Rotated Sorted Array
In these questions (like ones commonly seen on leetcode) we are given a sorted array and asked to find the minimum value. This may not seem like a binary search problem at first but we can actually use whats called a "Monotonic Condition" to apply a binary search. The monotonic condition states that:
- Any element that is less than the last element in the array is part of the rotated section/portion of values
- While any element greater than the last element is part of the original sorted section.

This can then be converted to the search pattern by checking the mid value against the last value in the array. If the mid value is less than the last value, we know that the minimum value must be to the left of mid (including mid). If the mid value is greater than the last value, we know that the minimum value must be to the right of mid. This allows us to effectively narrow down our search space and find the minimum value in O(log n) time complexity.

## Brief note on Trees and Graphs
Trees and graphs are non-linear data structures that require more complex traversal techniques than linear structures. Trees are hierarchical structures that consist of nodes connected by edges, with a single root node at the top. It's easy just to think of a tree as a graph with no cycles.

When dealing with graphs that could have cycles (like in BFS and DFS) we need to keep track of the nodes we've already visited to avoid infinite loops. This is typically done using a set or a boolean array to mark nodes as visited.

## Non-Linear Patterns
## Breadth-First Search (BFS)
One of the most widely known and important algorithms for traversing trees and graphs. It is incredibly easy as it operates by exploring a tree level by level, exploring a node and then all of its children before moving on to the next level. This is typically implemented using a queue data structure to keep track of the nodes to be explored. BFS is often used for problems involving shortest path, level order traversal, and graph traversal.

Starts at the root before exploring the neighbors of each node and repeating until nodes have been visited or the target node is found. A queue and list are needed in this case to keep track of the nodes explored and the nodes that have been discovered but not yet explored. This is important to avoid cycles and ensure that all nodes are visited. It should be noted that this is a FIFO (First In First Out) data structure, meaning that the first node added to the queue will be the first one to be explored. This is important for ensuring that all nodes are visited in the correct order and that the algorithm does not get stuck in an infinite loop

Below is a brief example of a BFS implementation in Java for a binary tree:

```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) {
        return result;
    }
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        for (int i = 0; i < levelSize; i++) {
            TreeNode currentNode = queue.poll();
            currentLevel.add(currentNode.val);
            if (currentNode.left != null) {
                queue.offer(currentNode.left);
            }
            if (currentNode.right != null) {
                queue.offer(currentNode.right);
            }
        }
        result.add(currentLevel);
    }
    return result;
}
```

### Example - Binary Tree Level Order Traversal (Leetcode 102)
This is a common question exploring the BFS pattern. It asks you to return the level order traversal of a binary tree, which is essentially a list of lists where each inner list contains the values of the nodes at that level of the tree. The BFS algorithm is used to traverse the tree level by level, adding the values of the nodes at each level to the corresponding inner list in the result.
To put it a bit more plainly, if working on a tree who begins at node 3, we traverse to the next level and add the values of the nodes at that level (e.g. 9 and 20) to the result list. We then continue to the next level and add the values of the nodes at that level (e.g. 15 and 7) to the result list. This process continues until all levels of the tree have been traversed and all node values have been added to the result list.

## Depth-First Search (DFS)
DFS is another widely known and important algorithm for traversing trees and graphs. It operates by exploring as far as possible along a particular path/branch in a tree before backtracking to explore other paths (Typically moving left to right). This is typically implemented using a stack data structure (or recursion, which uses the call stack) to keep track of the nodes to be explored, due to the nature of the algorithm and the stacks, DFS is a LIFO (Last In First Out) data structure, meaning the last node added to the stack will be the first one to be explored. This is important for ensuring that all nodes are visited in the correct order and that the algorithm does not get stuck in an infinite loop.

This algorithm is incredibly useful for problems in which you need to check all paths or check every possible configuration, e.g. finding all paths, searching for cycles etc. It's more memory efficient than BFS in some cases, especially when the tree or graph is deep and has many branches. However, it can be less efficient in terms of time complexity for certain problems, especially when the solution is located near the root of the tree or graph.

Below is a brief example of a DFS implementation in Java for a binary tree:

```java
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) {
        return result;
    }
    Stack<TreeNode> stack = new Stack<>();
    TreeNode currentNode = root;
    while (currentNode != null || !stack.isEmpty()) {
        while (currentNode != null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = stack.pop();
        result.add(currentNode.val);
        currentNode = currentNode.right;
    }
    return result;
}
```

And here is an example of the DFS traversal for a graph: 

```java
public void dfs(int node, boolean[] visited, List<List<Integer>> graph) {
    visited[node] = true;
    System.out.print(node + " ");
    for (int neighbor : graph.get(node)) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, graph);
        }
    }
}
```

### Example - Number of Islands (Leetcode 200)
This is a common question exploring the DFS pattern. It asks you to count the number of islands in a 2D grid, where '1's represent land and '0's represent water. Although this problem may seem quite difficult at first, it can be solved using the DFS algorithm. The main idea in the solution is to traverse the grid and whenever a '1' is found we invoke DFS to check all adjacent cells (up, down, left, right) as deep as they go and mark them as visited (by changing them to '0'). This effectively "sinks" the island and prevents it from being counted again. After the DFS is completed we increment a counter variable to keep track of the number of islands found. This process continues until all cells in the grid have been visited and all islands have been counted and the final count number returned is the total number of islands in the grid.

Below is some sample code for the Number of Islands problem using DFS:

```java
public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) {
        return 0;
    }
    int numIslands = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }
    return numIslands;
}

private void dfs(char[][] grid, int i, int j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
        return;
    }
    grid[i][j] = '0'; // Mark the cell as visited
    dfs(grid, i + 1, j); // Down
    dfs(grid, i - 1, j); // Up
    dfs(grid, i, j + 1); // Right
    dfs(grid, i, j - 1); // Left
}
```

## Backtracking
Backtracking is a general algorithmic technique that can be confusing at first but can be thought of as a more advanced/enhanced version of DFS. DFS often involves traversing pre built structures like graphs where the edges are already defined, while in backtracking we are often building the solution/strucure as we go - especially in combinatorial problems where the structure of the tree is generated dynamically based on the choices made at each step.

In backtracking we explore all possible solutions by making a series of decisions with each decision representing a new node and potential decisions representing a branch. We either reach a valid solution or reach a dead end. If we reach a dead end we backtrack to the previous decision point and try a different path. This process continues until all possible solutions have been explored.

Here is an example of a simple implementation of backtracking in Java for the N-Queens problem:

```java
public List<List<String>> solveNQueens(int n) {
    List<List<String>> result = new ArrayList<>();
    char[][] board = new char[n][n];
    for (int i = 0; i < n; i++) {
        Arrays.fill(board[i], '.');
    }
    backtrack(result, board, 0);
    return result;
}

private void backtrack(List<List<String>> result, char[][] board, int row) {
    if (row == board.length) {
        result.add(construct(board));
        return;
    }
    for (int col = 0; col < board.length; col++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            backtrack(result, board, row + 1);
            board[row][col] = '.';
        }
    }
}
```

And heres a simple normal dfs backtracking implementation for a graph - similar to what is in the dfs section above but with the addition of backtracking to allow for exploring all possible paths:

```java
public void backtrack(int node, boolean[] visited, List<List<Integer>> graph) {
    visited[node] = true;
    System.out.print(node + " ");
    for (int neighbor : graph.get(node)) {
        if (!visited[neighbor]) {
            backtrack(neighbor, visited, graph);
        }
    }
    visited[node] = false; // Backtrack
}
```

### Example - Letter Combinations of a Phone Number (Leetcode 17)
This is a common question involving returning all the potential letter combinations a given phone number could represent. Backtracking is the optimal approach for this problem as it allows us to explore/build all possible combinations whilst also pruning invalid paths.

We start by taking the input string of digits and mapping each digit to its corresponding letters on a phone keypad. We then use backtracking to explore all possible combinations of letters by iterating through the letters for each digit and recursively building the combinations. When we reach the end of the input string, we add the current combination to the result list. If we reach a dead end (i.e., there are no more letters to explore for a given digit), we backtrack to the previous digit and try a different letter.

The sample code for the Letter Combinations of a Phone Number problem using backtracking is as follows:

```java

digit_to_char = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

public List<String> letterCombinations(String digits) {
    List<String> result = new ArrayList<>();
    if (digits == null || digits.length() == 0) {
        return result;
    }
    backtrack(result, new StringBuilder(), digits, 0);
    return result;
}

private void backtrack(List<String> result, StringBuilder current, String digits, int index) {
    if (index == digits.length()) {
        result.add(current.toString());
        return;
    }
    String letters = digit_to_char.get(digits.charAt(index));
    for (char letter : letters.toCharArray()) {
        current.append(letter);
        backtrack(result, current, digits, index + 1);
        current.deleteCharAt(current.length() - 1); // Backtrack
    }
}
```

This will operate in O(4^n) time complexity, where n is the length of the input string, as each digit can map to up to 4 letters. The space complexity is O(n) for the recursion stack and the current combination being built.

## Priority Queue / Heap
This pattern is often associated with questions which ask for the K-Highest or K-Lowest values in a data structure. A common way to solve these problems is through using a priority heap, they're a special type of tree where the elements are organised in a specific way.
- **Max Heap** - A binary tree where the parent node is always greater than or equal to its child nodes. This allows for efficient retrieval of the maximum element in O(1) time complexity, while insertion and deletion operations can be performed in O(log n) time complexity.
- **Min Heap** - A binary tree where the parent node is always less than or equal to its child nodes. This allows for efficient retrieval of the minimum element in O(1) time complexity, while insertion and deletion operations can be performed in O(log n) time complexity.

It's confusing but we use the min heap to find the k largest elements and the max heap to find the k smallest elements. This is because we want to maintain a heap of size k, and when we encounter a new element, we compare it to the root of the heap. If the new element is larger than the root of a min heap (for k largest), we remove the root and insert the new element. Similarly, if the new element is smaller than the root of a max heap (for k smallest), we remove the root and insert the new element. This way, we always maintain a heap of size k with the k largest or k smallest elements.

This is also better explained with an example. Let's say we have a heap and want to find the 3 smallest values, we create a max heap of size 3. We start by adding the first 3 elements to the heap. Then, for each subsequent element, we compare it to the root of the max heap. If the new element is smaller than the root, we remove the root and insert the new element. This way, we always maintain a heap of size 3 with the 3 smallest elements.

Heaps allow for the access to the largest or smallest element in O(1) time complexity, while insertion and deletion operations can be performed in O(log n) time complexity. This makes them ideal for problems involving finding the k largest or k smallest elements in a data structure.

## Dynamic Programming
DP Problems typically involve optimizing a solution by breaking a problem down into smaller overlapping subproblems, storing them and then resuing them to avoid redundant calculations. There are two main ways to doing this:
1. **Top-Down Approach (Memoization)** - This approach involves breaking the problem down recursively into smaller subproblems and storing the results of these subproblems in a data structure (e.g. an array or hash map) to avoid redundant calculations. When a subproblem is encountered again, the stored result is used instead of recalculating it. This approach is often easier to implement and understand, but can have higher space complexity due to the recursive call stack. This may seem complicated but it's effectively just backtracking with the added memorization which just means saving the previous function call in a dictionary and using it when we do the same call again.
2. **Bottom-Up Approach (Tabulation)** - This approach involves solving the bottom sub problems first, using their solutions to build up to the solution of the original problem. This approach is often more efficient in terms of space complexity, as it avoids the overhead of the recursive call stack, but can be more difficult to implement and understand. Instead of relying on recursion, we build a table where each entry represents the solution to a subproblem, and we fill in the table iteratively until we reach the solution to the original problem. This approach avoids the overhead of recursion and memorization which often results in better time and space complexity. Commonly used when you know the dependencies between subproblems and can build the solution iteratively.

Sources:
- [Leetcode Patterns](https://leetcode.com/explore/learn/card/recursion-i/)
- [Simple Youtube Video on Patterns](https://www.youtube.com/watch?v=RYT08CaYq6A)
- [Geeks for Geeks - Pattern Recognition](https://www.geeksforgeeks.org/)