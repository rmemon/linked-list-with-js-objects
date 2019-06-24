function LinkedList() {
    this.head = null;
    this.tail = null;
}
  
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
  
LinkedList.prototype.add = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
};
