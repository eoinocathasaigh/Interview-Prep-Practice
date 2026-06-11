//THE FOLLOWING IS A TEMPORARY CODE SNIPPET FROM GEEKSFORGEEKS.ORG 
//PASTED WHILE I WAS WORKING ON LEETCODE QUESTIONS
//A PROPER EXPLANATION/DEMONSTRATION LIKE THE OTHER CLASSES WILL BE ADDED SOON WHEN I HAVE THE TIME
class Node {
    int data;
    Node left;
    Node right;

    Node(int value) {
        data = value;
        left = right = null;
    }
}

class GfG {

    // Check if two trees are identical
    static boolean areIdentical(Node root1, Node root2) {

        // Both nodes are null → identical
        if (root1 == null && root2 == null)
            return true;

        // One is null → not identical
        if (root1 == null || root2 == null)
            return false;

        // Check current node and recurse on children
        return (root1.data == root2.data &&
                areIdentical(root1.left, root2.left) &&
                areIdentical(root1.right, root2.right));
    }

    static boolean isSubTree(Node root1, Node root2) {

        // Empty subtree → always true
        if (root2 == null)
            return true;

        // Main tree empty but subtree not → false
        if (root1 == null)
            return false;

        // Match found at current node
        if (areIdentical(root1, root2))
            return true;

        // Otherwise, search in left and right
        return isSubTree(root1.left, root2) ||
               isSubTree(root1.right, root2);
    }

    public static void main(String[] args) {

        // Construct Tree root1
        //          26
        //         /  \
        //        10   3
        //       / \    \
        //      4   6    3
        //       \
        //        30
        Node root1 = new Node(26);
        root1.left = new Node(10);
        root1.right = new Node(3);
        root1.left.left = new Node(4);
        root1.left.right = new Node(6);
        root1.left.left.right = new Node(30);
        root1.right.right = new Node(3);

        // Construct Tree root2
        //          10
        //         /  \
        //        4    6
        //         \
        //          30
        Node root2 = new Node(10);
        root2.left = new Node(4);
        root2.right = new Node(6);
        root2.left.right = new Node(30);

        System.out.println(isSubTree(root1, root2) ? "true" : "false");
    }
}