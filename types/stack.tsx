export default class Stack<T> {
  private stack: T[] = [];
  private readonly capacity: number;

  constructor(capacity: number = 10) {
    this.capacity = capacity;
  }

  push(item: T): void {
    if (this.stack.length >= this.capacity) {
      // If the stack is full, remove the oldest item (first element)
      this.stack.shift();
    }
    // Push the new item onto the stack
    this.stack.push(item);
  }

  pop(): T | undefined {
    // Pop and return the top item from the stack
    return this.stack.pop();
  }

  peek(): T | undefined {
    // Return the top item without removing it from the stack
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  isFull(): boolean {
    return this.stack.length === this.capacity;
  }

  size(): number {
    return this.stack.length;
  }
}