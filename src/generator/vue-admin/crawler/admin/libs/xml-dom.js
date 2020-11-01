/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 14:05:41
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 14:30:51
 */


/**
 * node types{
 * document,
 * element,
 * attribute,
 * text,
 * comment
 * }
 * 
 * 
 *  element {
 *    tagName,
 *    attributes:{nodeName/name:nodeValue/value}
 * }
 * 
 * textNode{
 *   nodeValue,
 * }
 *  element -> hasChildNodes
 */

const { DOMParser, XMLSerializer } = require("xmldom");
const { OBJECT } = require("./utils");

/**
 * Resolve string to document
 * 
 * @param {String} text 
 * @returns {Document}
 */
function load(text) {
        return new DOMParser().parseFromString(text);
}

/**
 * Get matched direct children of current
 * 
 * @param {Node} node 
 * @param {Node=>boolean} predict 
 * @returns {[Node]}
 */
function selectDirect(node, matcher) {
        matcher = matcher || function (x) { return true; }
        let ls = [];
        OBJECT.forEach(node.childNodes, (key, value) => {
                if (key == "length" || key == "item" || key == toString)
                        return;

                if (matcher(value))
                        ls.push(value);
        });

        return ls;
}

/**
 * Serialize doc to string
 * 
 * @param {Document} doc 
 * @returns {String}
 */
function serialize(doc) {
        let serizlizer = new XMLSerializer();
        return serizlizer.serializeToString(doc);
}

/**
 * Get matched children of current node
 * 
 * @param {Node} node 
 * @param {(Node)=>boolean} predict 
 * @returns {[Node]}
 */
function selectAll(node, predict) {
        predict = predict || function (x) { return true; }
        let ls = [];
        OBJECT.forEach(node.childNodes, (key, value) => {
                if (key == "length" || key == "item" || key == "toString")
                        return;

                if (predict(value))
                        ls.push(value);

                // do recursurve 
                if (value.childNodes) {
                        selectAll(value, predict).forEach(x => {
                                ls.push(x);
                        })
                }
        });

        return ls;
}

/**
 * Dose node has attribute "key"
 * 
 * @param {Node} node 
 * @param {String} key 
 */
function hasAttribute(node, key) {
        return getAttribute(node, key) != undefined;
}

/**
 * Get attribute "key" of node
 * 
 * @param {Node} node 
 * @param {String} key 
 */
function getAttribute(node, key) {
        if (node.attributes) {
                for (let k in node.attributes) {
                        if (node.attributes[k].nodeName == key) {
                                return node.attributes[k].nodeValue;
                        }
                }
        }

        return undefined;
}

/**
 * Set attribute "key" of node
 * 
 * @param {Node} node 
 * @param {String} key 
 * @param {String} value 
 */
function setAttribute(node, key, value) {
        if (node.attributes) {
                for (let k in node.attributes) {
                        if (node.attributes[k].nodeName == key)
                                node.attributes[k].nodeValue = value;
                }
        }
}

exports.XML_DOM = {
        load,
        selectAll,
        selectDirect,
        getAttribute,
        hasAttribute,
        setAttribute,
        serialize
}