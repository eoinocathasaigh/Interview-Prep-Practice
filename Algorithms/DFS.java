//Depth First Search (DFS) is a crucial algorithm in software development and graph theory.
//It is a search in which we start at the root node and explore as far as possible along each branch before backtracking
//We start by traversing as far left as possible before backtracking and exploring the right side of the tree/graph
//Hence the name since we go as deep as possible before backtracking and exploring another path
//Using a stack data structure we keep track of the nodes we have visited and the nodes we still need to visit - remember, a stack is a LIFO (last in first out) data structure, so the last node we add will be the first node we remove

//DFS can be applied to areas such as:
// - Finding connected components in a graph
// - Detecting cycles in a graph
// - Topological sorting

//The Pseudocode for DFS is as follows:
//1. Start at the root node and push it onto the stack
//2. While the stack is not empty, do the following:
//   a. Pop the top node from the stack and mark it as visited
//   b. If the node is the target node, return it
//   c. Otherwise, push all unvisited neighbors of the node onto the stack
//3. If the stack is empty and the target node has not been found, return null

//Translating this to english:
//1. Start at the root node in the graph/tree and add it to a stack (its the first node we've visited) 
// - remember, a stack is a LIFO (last in first out) data structure, so the last node we add will be the first node we remove
//2. We then check if the current node is the target node, and return it if it is, if not then we continue
//3. We then add the left most unvisited neighbor to the stack, and repeat the process until we find the target node or run out of nodes to check
//The traversal and decision of which node we go to next is based on the order in which we added the nodes to the stack, so we will always check the nodes that were added last before checking the nodes that were added first
// - e.g. if we start at root node 1, and it has neighbors 2 and 3, we will check node 3 before checking node 2, even if node 2 is closer to the target node than node 3

//Source - https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

import java.util.ArrayList;
import java.util.Stack;

class DFS {
    //DFS for single connected component
    //This function takes an adjacency list representation of a graph and returns an arraylist of the nodes in the order they were visited
    static ArrayList<Integer> dfs(ArrayList<ArrayList<Integer>> adj) {
        //Tracking the number of vertices in the graph - number of nodes in the graph/tree
        int V = adj.size();
        //Tracking which nodes have been visited
        boolean[] visited = new boolean[V];
        //The result of the DFS traversal
        ArrayList<Integer> res = new ArrayList<>();
        
        //Starting the traversal at the root node (node 0) - this can be changed to any node in the graph/tree
        int src = 0;
        //Creating a stack to hold the nodes to be visited
        Stack<Integer> s = new Stack<>();
        //Marking the starting node as visited and adding it to the stack
        visited[src] = true;
        s.push(src);

        while (!s.isEmpty()) {
            //Removing the top node from the stack and adding it to the result
            int curr = s.pop();
            res.add(curr);

            //visit all the unvisited
            //neighbours of current node
            for (int x : adj.get(curr)) {
                if (!visited[x]) {
                    visited[x] = true;
                    s.push(x);
                }
            }
        }
        
        return res;
    }
}