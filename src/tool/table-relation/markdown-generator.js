const { OBJECT,ARRAY } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { GraphBuilder } = require("../markdown-writer/graph");

class MarkdownWriter {

        constructor (relations,maxDepth=1) {
                this._relations = relations;
                this._maxDepth=maxDepth;
        }

        /**
         * Do generate
         * 
         * @returns {String} markdown graph string
         */
        generateMarkdown() {
                let output = [];
                let items = this._generate();
                OBJECT.forEach(items, (key, path) => {
                        let content = "";
                        content += `### ${key}\r\n ---- \r\n`;
                        let builder = new GraphBuilder("TD");
                        path.forEach(edge => {
                                builder.path(edge);
                        });

                        content += builder.build() + "---\r\n";
                        let item="";
                        ARRAY.distinct(STR.splitToLines(content)).forEach(line=>{
                           item+=line+"\r\n";
                        });

                        output.push({
                                name: key,
                                content:item
                        });
                });

                return output;
        }

        /**
         * Dispatch func 
         * 
         * @returns {Lines}
         */
        _generate() {
                let pathes = {};
                Object.keys(this._relations).forEach(table => {
                        pathes[table] = this._generateCore(table, new Set(), []);
                        pathes[table] = this._rewrite(pathes[table]);
                });

                return pathes;
        }

        /***
         * Recusively generate util repeat appear
         * 
         * @param {String} tableName 
         * 
         */
        _generateCore(tableName, set, path) {
                let ls = [];

                if (!this._relations[tableName] || path.length > this._maxDepth) {
                        path.push({
                                name: tableName,
                        })

                        ls.push(path);

                        return ls;
                }

                this._relations[tableName].forEach(relation => {
                        let _newPath = this._copyArray(path);
                        let _newSet = this._copySet(set);
                        let joinType = relation.joinType == "oneToMany" ? "1:N" : "N:1";
                        let joinCondition = `${joinType} on ${relation.selfColumn} = ${relation.otherTableColumn}`;
                        _newPath.push({
                                text: joinCondition,
                                name: tableName,
                        });
                        _newSet.add(tableName);

                        // path is not end
                        if (!_newSet.has(relation.otherTable)) {
                                let results = this._generateCore(relation.otherTable, _newSet, _newPath);
                                // console.log(result);
                                results.forEach(item => {
                                        ls.push(item);
                                })
                        } else {
                                ls.push(_newPath);
                        }
                });

                return ls;
        }

        _rewrite(lines) {
                let _newPathes = [];
                lines.forEach(x => {

                        for (let i = 0; i < x.length - 1; i++) {
                                _newPathes.push([x[i], x[i + 1]]);
                        }
                });

                let set = new Set();

                _newPathes = _newPathes.filter(path => {
                        let content = "";
                        path.forEach(edge => {
                                content += edge.name + edge.text;
                        });

                        if (set.has(content)) {
                                return false;
                        } else {
                                set.add(content);
                                return true;
                        }
                });

                return _newPathes;
        }

        /**
         * Copy array
         * 
         * @param {[]} array 
         * @returns {[]}
         */
        _copyArray(array) {
                let copy = [];
                array.forEach(x => {
                        copy.push(x);
                });

                return copy;
        }

        /**
         * Copy set
         * 
         * @param {Set} set 
         * @returns {Set}
         */
        _copySet(set) {
                let copy = new Set();
                set.forEach(x => {
                        copy.add(x);
                });

                return copy;
        }
}

exports.MarkdownWriter = MarkdownWriter