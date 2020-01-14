const { OBJECT,ARRAY } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { GraphBuilder } = require("../markdown-writer/graph");

class MarkdownWriter {

        constructor (relations,level=1) {
                this._relations = relations;
                this._level=level;
        }

        /**
         * Do generate
         * 
         * @returns {String} markdown graph string
         */
        generateMarkdown() {
                let output = [];
                let items = this._generate();
                OBJECT.forEach(items, (key, value) => {
                        let content = "";
                        content += `### ${key}\r\n ---- \r\n`;
                        let builder = new GraphBuilder("TD");
                        value.forEach(x => {
                                builder.line(x);
                        });

                        content += builder.build() + "---\r\n";
                        let item="";
                        ARRAY.distinct(STR.splitToLines(content)).forEach(x=>{
                           item+=x+"\r\n";
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
                let output = {};
                Object.keys(this._relations).forEach(table => {
                        output[table] = this._generateCore(table, new Set(), []);
                        output[table] = this._rewrite(output[table]);
                });

                return output;
        }

        /***
         * Recusively generate util repeat appear
         * 
         * @param {String} tableName 
         * 
         */
        _generateCore(tableName, set, line) {
                let ls = [];

                if (!this._relations[tableName] || line.length > this._level) {
                        line.push({
                                name: tableName,
                        })

                        ls.push(line);

                        return ls;
                }

                this._relations[tableName].forEach(relation => {
                        let _newLine = this._copyArray(line);
                        let _newSet = this._copySet(set);
                        let joinType = relation.joinType == "oneToMany" ? "1:N" : "N:1";
                        let joinCondition = `${joinType} on ${relation.selfColumn} = ${relation.otherTableColumn}`;
                        _newLine.push({
                                text: joinCondition,
                                name: tableName,
                        });
                        _newSet.add(tableName);

                        // path is not end
                        if (!_newSet.has(relation.otherTable)) {
                                let result = this._generateCore(relation.otherTable, _newSet, _newLine);
                                // console.log(result);
                                result.forEach(x => {
                                        ls.push(x);
                                })
                        } else {
                                ls.push(_newLine);
                        }
                });

                return ls;
        }

        _rewrite(lines) {
                let _newLines = [];
                lines.forEach(x => {

                        for (let i = 0; i < x.length - 1; i++) {
                                _newLines.push([x[i], x[i + 1]]);
                        }
                });

                let set = new Set();

                _newLines = _newLines.filter(line => {
                        let content = "";
                        line.forEach(cell => {
                                content += cell.name + cell.text;
                        });

                        if (set.has(content)) {
                                return false;
                        } else {
                                set.add(content);
                                return true;
                        }
                });

                return _newLines;
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