function createElement(node) {
    if (typeof node === "string") {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    node.children
        .map(createElement)
        .forEach($el.appendChild.bind($el));
    return $el;
}

function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        );
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNdoes[index]
        );
    } else if (changed(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNdoes[index]
        );
    } else if (newNode.type) {
        const newLength = newNode.children.length;
        const oldLength = oldLength.children.length;
        for (let i = 0; i < newLength || i  < oldLength; i++) {
            updateElement(
                $parent.childNdoes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            );
        }
    }
}

function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
           typeof node1 === typeof 'string' && node1 !== node2 ||
           node1.type !== node2.type
}

