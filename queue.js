// Queue
// 1. linear data structure. 
// 2. flexible size 



// First-In-First-Out (FIFO)
// In FIFO data structure, the first element that were added to the queue will be the first one to be remove.

// simple implementation in javascript (wikipedia)
// class Queue {
//     constructor() {
//         this.item = new Array(0)  // Array is used to implement a queue
//     }
//     enqueue(element) {
//         this.item.push(element)   // Add element in queue 
//     }
//     dequeue() {
//         this.item.shift()  // Removes an element from queue
//     }
// }

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        if (this.isEmpty) return "Undefine"
        this.items.shift()
    }
    front() {
        if (this.isEmpty) return "No element in queue"
        return this.items[0]
    }
    ifEmpty() {
        return this.items.length == 0
    }
    printQueue() {
        var queue = ''
        for (let i = 0; i < this.items.length; i++) {
            queue += this.items[i] + " "
        }
        return queue
    }
}


var queue = new Queue()

console.log(queue.dequeue) // "Undefine"
console.log(queue.isEmpty) // true
// Adding element in queue
queue.enqueue(11)
queue.enqueue(12)
queue.enqueue(13)
queue.enqueue(14)
console.log(queue.front) // 11

// Remove 11 from the queue
console.log(queue.dequeue())

//  print queue
console.log(queue.printQueue()) // "12 13 14"


