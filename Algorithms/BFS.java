//The following class is meant to demonstrate the breadth first search algorithm
//Think of it as a way to traverse a graph or tree level by level, looking(searching) for a specific node or value
//The pseudo code/explanation for the algorithm goes as follows:
//1. Create a queue and add the starting node to it
//2. While the queue is not empty, do the following:
//   a. Remove the first node from the queue and mark it as visited
//   b. If the node is the target node, return it
//   c. Otherwise, add all unvisited neighbors of the node to the queue
//3. If the queue is empty and the target node has not been found, return null
//Translating this to english:
//1. Start at the root node in the graph/tree and add it to a queue (its the first node we've visited) 
// - remember, a queue is a FIFO (first in first out) data structure, so the first node we add will be the first node we remove
//2. We then check if the current node is the target node, and return it if it is, if not then we continue
//3. We then add all the neighbors of the current node to the queue, and repeat the process until we find the target node or run out of nodes to check
//The traversal and decision of which node we go to next is based on the order in which we added the nodes to the queue, so we will always check the nodes that were added first before checking the nodes that were added later
// - e.g. if we start at root node 1, and it has neighbors 2 and 3, we will check node 2 before checking node 3, even if node 3 is closer to the target node than node 2

//BFS can be applied to areas such as:
// - Finding the shortest path in a graph
// - Detecting cycles in a graph
// - Finding connected components in a graph
// - Network Routing

//Source - https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

import java.util.ArrayList;
import java.util.Queue;
import java.util.LinkedList;

class BFS {
    //BFS for single connected component
    //This function takes an adjacency list representation of a graph and returns an arraylist of the nodes in the order they were visited
    static ArrayList<Integer> bfs(ArrayList<ArrayList<Integer>> adj) {
        //Tracking the number of vertices in the graph - number of nodes in the graph/tree
        int V = adj.size();
        //Tracking which nodes have been visited
        boolean[] visited = new boolean[V];
        //The result of the BFS traversal
        ArrayList<Integer> res = new ArrayList<>();
        
        //Starting the traversal at the root node (node 0) - this can be changed to any node in the graph/tree
        int src = 0;
        //Creating a queue to hold the nodes to be visited
        Queue<Integer> q = new LinkedList<>();
        //Marking the starting node as visited and adding it to the queue
        visited[src] = true;
        q.add(src);

        while (!q.isEmpty()) {
            //Removing the first node from the queue and adding it to the result
            int curr = q.poll();
            res.add(curr);

            //visit all the unvisited
            //neighbours of current node
            for (int x : adj.get(curr)) {
                if (!visited[x]) {
                    visited[x] = true;
                    q.add(x);
                }
            }
        }
        
        return res;
    }
    
    //Utility method to add an edge to the graph
    static void addEdge(ArrayList<ArrayList<Integer>> adj, int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    public static void main(String[] args) {
        int V = 5;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        
        // creating adjacency list
        for (int i = 0; i < V; i++)
            adj.add(new ArrayList<>());

        addEdge(adj, 1, 2);
        addEdge(adj, 1, 0);
        addEdge(adj, 2, 0);
        addEdge(adj, 2, 3);
        addEdge(adj, 2, 4);

        ArrayList<Integer> res = bfs(adj);

        for (int x : res)
            System.out.print(x + " ");
    }
}

//INTERVIEW QUESTIONS
//BFS can be used to solve a variety of problems, and can often appear in interview questions.
//Whats important is understanding the algorithm, the question and the cases/patterns in which it should be implemented.
//Some examples of questions that can be solved using BFS include:
//1. Implement a bfs traversal of a graph/tree (Simplest as it openly states that you need to implement bfs)
