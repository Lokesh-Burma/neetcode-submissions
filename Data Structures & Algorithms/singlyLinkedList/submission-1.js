class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let pointer = this.head;
        for(let i = 0; i < index; i++)
        {
            if (pointer === null) return -1;
            pointer = pointer.next;
        }
        if (pointer === null) return -1;
        return pointer.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;

        if (this.tail === null) {
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = new Node(val);

        if(this.tail === null) {
            this.head = node;
            this.tail = node;
            return
        }
        this.tail.next = node;
        this.tail = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (this.head === null) return false    // empty list

        // removing head
        if (index === 0) {
            this.head = this.head.next
            if (this.head === null) this.tail = null  // list became empty
            return true
        }

        // traverse to node BEFORE index
        let pointer = this.head
        for (let i = 0; i < index - 1; i++) {
            if (pointer.next === null) return false   // out of bounds
            pointer = pointer.next
        }

        if (pointer.next === null) return false       // index out of bounds

        if (pointer.next === this.tail) {             // removing tail
            this.tail = pointer
        }

        pointer.next = pointer.next.next             // skip over node
        return true
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        let pointer = this.head;

        while(pointer != null) {
            arr.push(pointer.val);
            pointer = pointer.next;
        }
        return arr;
    }
}
