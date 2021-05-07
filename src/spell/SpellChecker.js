const { SimpleFullTextSearcher } = require("./../common/full-text-index/simple-full-text-searcher");
const { FILE } = require("./../libs")
var stringSimilarity = require('string-similarity');

class SpellChecker {

        constructor () {
                this._nameSet = new Set();
                this._loaded = false;
                this._searcher = new SimpleFullTextSearcher();
        }

        load(file) {
                let lines = FILE.readLines(file);
                lines.forEach(line => {
                        this._nameSet.add(line);
                        this._searcher.addDocuments([{
                                name: line,
                                content: line
                        }])
                });
        }

        check(word) {
                return this._nameSet.has(word);
        }

        findMostPossibleWords(word) {
                let results = this._searcher.search(word, 100);

                let res = [];
                results.forEach(x => {
                        let score = stringSimilarity.compareTwoStrings(word, x.name);
                        res.push({ name: x.name, score });
                });

                res = res.sort((y, x) => x.score - y.score);
                return res;
        }
}

exports.SpellChecker = SpellChecker;