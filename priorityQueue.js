// A priority queue is an abstract data type which is like a regular queue or stack data structure,
// but where additionally each element has a "priority" associated with it. 
// In a priority queue, an element with high priority is served before an element with low priority.



class QElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}



class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        var qElement = new QElement(element, priority);
        var contain = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement)
        }
    }

    dequeue() {
        if (this.isEmpty()) return "Underoverflow"
        return this.items.shift()
    }

    rear() {
        if (this.isEmpty()) return "No Element in queue"
    }

    front() {
        if (this.isEmpty()) return "No Element in queue"
        return this.items[0]
    }
    isEmpty() {
        return this.items.length == 0
    }
    printPQueue() {
        var str = ""
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " "
        }
        return str
    }
}

var priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());  //true
console.log(priorityQueue.front()); // No Element in queue


priorityQueue.enqueue("Apple", 2);
priorityQueue.enqueue("Mango", 1);
priorityQueue.enqueue("Orange", 1);