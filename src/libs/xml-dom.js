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

const { DOMParser } = require("xmldom");
const { OBJECT } = require("./utils");

function load(text) {
        return new DOMParser().parseFromString(text);
}

/**
 * 
 * @param {Node} node 
 * @param {Node=>boolean} predict 
 * @returns {[Node]}
 */
function selectDirect(node, predict) {
        predict = predict || function (x) { return true; }
        let ls = [];
        OBJECT.forEach(node.childNodes, (key, value) => {
                if (key == "length" || key == "item" || key == toString)
                        return;

                if (predict(value))
                        ls.push(value);
        });

        return ls;
}

/**
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
                if (value.childNodes)
                        ls.push(selectAll(value, predict));
        });

        return ls;
}

/**
 * 
 * @param {Node} node 
 * @param {String} key 
 */
function hasAttribute(node, key) {
        return getAttribute(node, key) != undefined;
}

/**
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
        containsAttr: hasAttribute,
        setAttr: setAttribute
}