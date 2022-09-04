class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        if (!this.stack.length) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            const minStackLastValue = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(minStackLastValue, val));
        }
    }

    pop() {
        if (!this.stack.length) {
            return null;
        }
        this.minStack.pop();
        return this.stack.pop();
    }

    top() {
        if (!this.stack.length) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length
        - 1];
    }
}
