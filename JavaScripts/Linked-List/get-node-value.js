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

const getNodeValue = function (head, index) {
    if (head === null) {
        return null;
    }
    if (index === 0) {
        return head.value;
    }
    return getNodeValue(head.next, index - 1);
};
const getNodeValue2 = (head, index) => {
    let count = 0;
    let current = head;
    while (current !== null) {
      if (count === index) return current.value;
      current = current.next;
      count += 1;
    }
    return null;
  };

module.exports = {
    getNodeValue,
    getNodeValue2,
};
