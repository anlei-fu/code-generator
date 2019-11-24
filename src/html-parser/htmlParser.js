


/**
 * 
 * @param {{name,children,attribs}} node 
 * @param {(node:{name,children,attribs})=> boolean} predict 
 * @returns {[{name:String,children:node,attribs:{key:value}}]}
 */
function selectDirect(node, predict) {
        let ls = [];
        if (node.children) {
                node.children.foreEach(x => {
                        if (predict(x))
                                ls.push(x);
                });
        }

        return ls;
}

function selectAll(node, predict) {
        let ls = [];
        if (node.children) {
                node.children.foreEach(x => {
                        if (predict(x))
                                ls.push(x);

                        ls.push(selectAll(x, predict));
                });
        }

        return ls;
}

function getAttribute(node, key) {
        if (node.attribs)
                return node.attribs[key];
}

function getInnerText(node, inclueChildren) {
        console.log(node)
        let output = "";
        if (node.children) {
                if(node.type=="text")
                console.log(node);
                node.children.forEach(x => {
                        if (x.name == "text")
                                output += x.data;

                        // if (inclueChildren)
                        //         output += getInnerText(x, true);
                })
        }

        return output;
}



exports.NodeUtils={
        selectAll,
        selectDirect,
        getAttribute,
        getInnerText
}