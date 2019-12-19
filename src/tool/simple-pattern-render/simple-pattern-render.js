/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-19 11:50:49
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 14:07:46
 */
const { STR } = require("./../../libs/str")
const { FILE } = require("./../../libs/file")
const { OBJECT } = require("./../../libs/utils")

exports.SimpleRender = class SimpleRender {
        constructor(basePatterns = {}, templateFile, prefix = "@", suffix = "") {
                this._basePatterns = {};
                this._prefix = prefix;
                this._suffix = suffix;
                OBJECT.forEach(basePatterns, (key, value) => {
                        this._basePatterns[`${this._prefix}${key}${this._suffix}`] = value;
                });

                if (templateFile)
                        this._template = FILE.read(templateFile);
        }

        /**
         * Set property "_template"
         * 
         * @param {String} template 
         */
        setTempalte(template) {
                this._template = template;
        }

        /**
         * Set property "_suffix"
         * 
         * @param {String} suffix 
         */
        setSuffix(suffix) {
                this._suffix = suffix;
        }

        /**
        * Set property "_prefix"
        * 
        * @param {String} prefix 
        */
        setPrefix(prefix) {
                this._prefix = prefix;
        }

        /**
         * Render from a template file 
         * 
         * @param {String} templateFilePath  path
         * @param {boolean} generate 
         * @param {object} config 
         * @returns {String}
         */
        renderFile(templateFilePath, config = {}, generate = true) {
                return this.renderContent(FILE.read(templateFilePath), generate, config);
        }

        /**
         * Render template
         * 
         * @param {Map} config 
         * @param {bool} generate 
         * @returns {String}
         */
        renderTemplate(config = {}, generate = true) {
                if (!this._template)
                        throw new Error("no template set to this render!");

                return this.renderContent(this._template, generate, config);
        }

        /**
         * Render content
         * 
         * @param {String} content 
         * @param {bool} generate 
         * @param {Map} config 
         * @returns {String}
         */
        renderContent(content, config = {}, generate = true) {
                let patterns = !generate ? config : this.generatePattern(config);
                return STR.replace(content, patterns);
        }

        /**
         * Generate replace pattern
         * 
         * @param {Map} config 
         */
        generatePattern(config = {}) {
                let copy = OBJECT.clone(this._basePatterns);
                OBJECT.extend(copy, config);
                OBJECT.forEach(copy, (key, value) => {
                        patterns[`${this._prefix}${key}${this._suffix}`] = value;
                });
                return copy;
        }

}
