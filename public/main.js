var myLL = new LinkedList();

window.onload = function(e){ 
    renderNodes();
}

function addNode(dom) {    
    var nodeValue = dom.elements[0].value
    if(nodeValue) {
        myLL.add(nodeValue);
    }
    renderNodes();
    dom.elements[0].value = '';
    return false;
}

function renderNodes(){
    var nodeGroup = document.querySelector('.node-group');
        nodeGroup.innerHTML = "";
    
    var currentNode = myLL.head;    
    while (currentNode) {
        var node = document.createElement('div');
        node.className = "node";
        node.innerHTML = "<span>"+ currentNode.value +"</span>";
        nodeGroup.appendChild(node);
        currentNode = currentNode.next
    }

    var node = document.createElement('div');
        node.className = "node-last";
        node.innerHTML = "<span> "+ (myLL.head ? "null": "Please Add Node To your List.") +"</span>";
        nodeGroup.appendChild(node);
}