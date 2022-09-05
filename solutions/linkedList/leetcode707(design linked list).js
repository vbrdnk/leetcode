class Node {
    constructor(value = null, prev = null, next = null) {
        this.val = value;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.length = 0;

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(index) {
        if (index < 0 || index >= this.length) return - 1;

        let curr = this.head.next;

        while (index--)  curr = curr.next;
        return curr.val;
    }

    addAtHead(val) {
        let prev = this.head;
        let next = this.head.next;

        const node = new Node(val, prev, next);

        prev.next = node;
        next.prev = node;

        this.length++;
    }

    addAtTail(val) {
        let prev = this.tail.prev;
        let next = this.tail;

        const node = new Node(val, prev, next);

        prev.next = node;
        next.prev = node;

        this.length++;
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return null;

        if (index === this.length) {
            this.addAtTail(val);
            return;
        }

        let prev = this.head;

        while (index--) prev = prev.next;

        let next = prev.next;

        let node = new Node(val, prev, next);

        prev.next = node;
        next.prev = node;

        this.length++;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return null;

        let prev = this.head;

        while (index--) prev = prev.next;

        let next = prev.next.next;

        prev.next = next;
        next.prev = prev;

        this.length--;
    }
}
