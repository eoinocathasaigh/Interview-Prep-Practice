//Linked List in Java
//Linked lists are a useful data structure that can be used to implement various other data structures such as stacks, queues, and graphs. 
//A linked list is a collection of nodes where each node contains a value and a reference to the next node in the list.
//It can be thought of as a line or chain of sorts where each individual node in memory has a value (e.g. 4) and a pointer/reference to the next node in the list (e.g. 5). 
//The last node in the list will have a reference to null, indicating the end of the list.

//Typically when it comes to linked lists we declare a class Node
//This effectively allows us to dictate the structure of each node in the linked list.
//i.e. what it contains
//Also declaring things like the pointer to the next value in the list
class Node {
    int value;
    Node next;

    public Node(int value) {
        this.value = value;
        this.next = null;
    }
}

//Declaring a class for the linked list itself
//This class will contain methods for adding, removing, and traversing the linked list
class LinkedList {
    Node head;
    public LinkedList() {
        this.head = null;
    }

    //Method to add a new node to the end of the linked list
    public void add(int value) {
        //Declaring a new node object for the value we want to add
        Node newNode = new Node(value);
        //If the head of the list is null then we simply set this new node to be the head
        if (head == null) {
            head = newNode;
            return;
        }
        //Otherwise we traverse the linked list until we reach the end and set the pointer of the last element to now point to the new node
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    //Method to remove a node with a specific value from the linked list
    public void remove(int value) {
        //If the head of the list is null then we simply return as there is nothing to remove
        if (head == null) {
            return;
        }
        //If the head of the list is the value we want to remove then we set the head to be the next node in the list
        if (head.value == value) {
            head = head.next;
            return;
        }
        //Otherwise we traverse the linked list until we find the node with the value we want to remove 
        //We then set the pointer of the previous node to now point to the next node, effectively removing it from the list
        Node current = head;
        while (current.next != null) {
            if (current.next.value == value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    //Method to traverse the linked list and print out the values of each node
    public void traverse() {
        Node current = head;
        while (current != null) {
            System.out.print(current.value + " ");
            current = current.next;
            System.out.println();
        }
    }
}

//From here linked lists can be used normally in programs