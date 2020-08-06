// A linkList is  a linear data structure of similar to an array.
// Linear collection of data element.

// **Single Linked List:- Each node contain only one pointer to the next node. This is we have been taking about so far.

// Implementation of Linked List

// If head node is not passed, the head is initialized to null.

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

// Some Linked List methods
// size() = This method is return the number of nodes present in the linked list.
// clear() = This method empties out the list.
// getLast() = This method return the last node of the linked list.
// getFirst() = This method return the first node of the linked list.


class Node {
    constructor(data, next = null) {
        this.data = data,  //data
            this.next = next  //pointer
    }
}

class LinkedList {
    constructor() {
        this.head = null  //linked list initially does not contain any node
    }
}

let list = new LinkedList()


// Inserting node at the beginning

LinkedList.prototype.insertAtBeginning = function (data) {
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    return this.head
}

// Inserting node at the end 
// In this case, new node added end of the list

LinkedList.prototype.insertAtEnd = function (data) {
    let newNode = new Node(data)
    if (!this.head) {
        this.head = newNode
        return this.head
    }
    let tail = this.head
    while (tail.next !== null) {
        tail = tail.next
    }
    tail.next = newNode
    return this.head
}