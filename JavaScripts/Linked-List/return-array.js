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

const printLinkedValues = function (head) {
    const values = [];
    _linkedListValues(head, values);
    return values;
};

const _linkedListValues = function (head, values) {
    if (head === null) {
        return;
    }
    values.push(head.value);
    _linkedListValues(head.next, values);
};
