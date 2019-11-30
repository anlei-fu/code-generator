const htmlparser2 = require("htmlparser2");

/**
 * 
 * @param {String} html 
 *@returns  {NodeWithChildren}
 */
exports.parse = function parse(html) {
        let nodes = htmlparser2.parseDOM(html)
        for (const node of nodes)
                if (node.name == "html")
                        return node;

}