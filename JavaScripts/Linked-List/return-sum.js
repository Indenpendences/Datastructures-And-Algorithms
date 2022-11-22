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

const linkedListFind = function (head, target) {
    if (head === null) {
        return false;
    }
    if (head.value === target) {
        return true;
    }
    return linkedListFind(head.next, target);
};

const linkedListFind2 = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
};

module.exports = {
    linkedListFind,
    linkedListFind2,
};
