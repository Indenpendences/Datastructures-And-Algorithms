class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null

const printLinkedList = function (head) {
    let current = head;
    while (current !== null) {
        console.log(current.value + " -> ");
        current = current.next;
    }
};

const printLinkedList2 = function (head) {
    if (head === null) {
        return;
    }
    console.log(head.value);
    printLinkedList(head.next);
};

;
