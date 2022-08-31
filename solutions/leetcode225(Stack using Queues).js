
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    enqueue(val) {
        let node = new Node(val);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        this.size++;
    }
    
    dequeue() {
        if (!this.head) return null;
        
        let node = this.head;
        this.head = this.head.next;
        node.next = null;
        this.size--;
        
        return node.val;
    }

    peek() {
        return this.head.val;
    }

    empty() {
        return this.size === 0;
    }
}

class MyStack {
    constructor() {
        this.queue = new MyQueue();
    }

    push(val) {
        let rotateLen = this.queue.size;
        this.queue.enqueue(val);

        while (rotateLen--) {
            this.queue.enqueue(this.queue.dequeue());
        }
    }

    pop() {
        return this.queue.dequeue();
    }

    empty() {
        return this.queue.empty();
    }

    top() {
       return this.queue.peek();
    }
};
