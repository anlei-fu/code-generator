const { OBJECT } = require("../../libs/utils");
const { LoggerFactory } = require("./../logging/logger-factory");

const LOG = LoggerFactory.getLogger("simple-full-text-searcher");


/**
 * Properties of document
 */
class Document {

        /**
         * 
         * @param {String} content 
         * @param {Number} weight 
         * @param {String} name 
         */
        constructor (content, weight, name) {
                this.conetnt = content;
                this.wight = weight;
                this.name = name;
        }
}

const DEFAULT_STOP_WORDS = [
        "!",
        " ",
        "\n",
        "\r",
        "\t",
        ".",
        ":",
        ";",
        "'",
        "\"",
];

class SimpleFullTextSearcher {

        constructor () {

                /**
                 * Document map, "key" document name, "value" @see Document 
                 */
                this._documentsMap = new Map();

                /**
                 * Token map "key" token, "value" @see Map<String,Document> "key" document
                 * name "value" document token score 
                 */
                this._tokenDocumentsMap = new Map();

                /**
                 * Disable tokens
                 */
                this._disableTokens = new Set();

                /**
                 * stop words
                 */
                this._stopWords = new Set(DEFAULT_STOP_WORDS);

                /**
                 * @type {(String)=>[String]}
                 */
                this._customerTokenizer;
        }

        /**
         * Use customer tokenizer
         * 
         * @param {(String)=>[String]} tokenizer 
         */
        useCustomerTokenizer(tokenizer) {
                this._customerTokenizer = tokenizer;
        }

        /**
         * Add Documents
         * 
         * @param {[Document]} documents 
         */
        addDocuments(documents) {
                documents.forEach(document => {
                        if (!this._documentsMap.has(document.name))
                                this._documentsMap.set(document.name, document);

                        let tokens = this._customerTokenizer
                                ? this._customerTokenizer(document.content)
                                : this._defaultTokenizer(document.content);

                        tokens.forEach(token => {
                                this._createTokenDocumentIndex(token, document.name, document.weight || 1);
                        });

                        // caculate term frequency of every document
                        new Set(tokens).forEach(token => {
                                let map = this._tokenDocumentsMap.get(token);
                                map.forEach((weight, documentName) => {
                                        map.set(documentName, this._caculateTermFrequencyFactor(weight));
                                });
                        })

                        this._documentsMap.get(document.name).totalTokenCount = tokens.length;
                });

        }

        /**
         * Remove Document
         * 
         * @param {String} documentName 
         */
        removeDocument(documentName) {
                if (!this._documentsMap.has(documentName))
                        return;

                let tokens = this._customerTokenizer
                        ? this._customerTokenizer(this._documentsMap.get(documentName).content)
                        : this._defaultTokenizer(this._documentsMap.get(documentName).content);

                tokens.forEach(x => {
                        let tokenDocumentsMap = this._tokenDocumentsMap.get(x);
                        tokenDocumentsMap.delete(documentName);
                });
        }

        /**
         * Disable token
         * 
         * @param {String} token 
         */
        disableToken(token) {
                this._disableTokens.add(token);
                this._tokenDocumentsMap.delete(token);
        }

        /**
         * Find best matched documents by keywords with top limit
         * 
         * @param {String} keywords 
         * @param {Number} top 
         * 
         * @returns {[Document]}
         */
        search(keywords, top = 1) {
                let tokens = this._customerTokenizer
                        ? this._customerTokenizer(keywords)
                        : this._defaultTokenizer(keywords);

                // find matched tokens
                let matchedTokenCollection = [];
                tokens.forEach(token => {
                        if (this._tokenDocumentsMap.has(token))
                                matchedTokenCollection.push({
                                        token: token,
                                        documents: this._tokenDocumentsMap.get(token)
                                });
                });

                // get hitted document and hitted token count
                let documentTokenHittedMap = this._getDocumentMatchedTokenCount(matchedTokenCollection);

                // caculate reverse score 
                let documentScores = new Map();
                matchedTokenCollection.forEach(item => {
                        let idf = this._caculateInversedDocumentFrequencyFactor(this._documentsMap.size, item.documents.size);
                        item.documents.forEach((tf, documentName) => {
                                if (!documentScores.has(documentName))
                                        documentScores.set(documentName, 0);

                                let lengthNormlization = this._caculateLengthNormFactor(documentTokenHittedMap.get(documentName),
                                        this._documentsMap.get(documentName).totalTokenCount);

                                // idf *tf*tf*norm
                                let tokenScore = this._defaultTokenScorer(idf, tf, lengthNormlization);
                                let score = documentScores.get(documentName) + tokenScore;
                                documentScores.set(documentName, score);
                        });
                });

                // canculate with coordiation factor
                documentScores.forEach((score, documenName) => {
                        let documentScore = this._canculateCoordinationFactor(tokens.length, documentTokenHittedMap.get(documenName)) * score;
                        documentScores.set(documenName, documentScore);
                });

                // rank
                let results = [];
                documentScores.forEach((value, key) => {
                        results.push({
                                name: key,
                                score: value
                        });
                });
                top = top > documentScores.size ? documentScores.size : top;
                results = results.sort((x, y) => y.score - x.score).slice(0, top);
                results.forEach(x => {
                        OBJECT.extend(x, this._documentsMap.get(x.name))
                });

                return results;
        }

        /**
         * Single word tokenizer
         * 
         * @private
         * @param {String} pattern 
         * @returns {[String]}
         */
        _defaultTokenizer(pattern) {
                let tokens = [];
                for (const c of pattern) {
                        if (this._stopWords.has(c) || this._disableTokens.has(c))
                                continue;

                        tokens.push(c);
                }

                return tokens;
        }

        /**
         * Create document token index
         * 
         * @private
         * @param {String} token 
         * @param {String} documentName 
         */
        _createTokenDocumentIndex(token, documentName) {
                if (!this._tokenDocumentsMap.has(token))
                        this._tokenDocumentsMap.set(token, new Map());

                if (!this._tokenDocumentsMap.get(token).has(documentName))
                        this._tokenDocumentsMap.get(token).set(documentName, 0);

                let weight = this._tokenDocumentsMap.get(token).get(documentName);
                this._tokenDocumentsMap.get(token).set(documentName, ++weight);
        }

        /**
         * Score token item
         * 
         * @private
         * @param {String} token 
         * @param {Number} tf of term frequency
         * @returns {Number}
         */
        _defaultTokenScorer(idf, tf, lenthNorm) {
                return tf * idf * idf * lenthNorm;
        }

        /**
         * Get hit document token count
         * 
         * @param {Map} matchedTokenCollection 
         */
        _getDocumentMatchedTokenCount(matchedTokenCollection) {
                let map = new Map();
                matchedTokenCollection.forEach(item => {
                        item.documents.forEach((tf, documentName) => {
                                if (!map.has(documentName))
                                        map.set(documentName, 0);

                                let count = map.get(documentName);
                                map.set(documentName, ++count);
                        });
                });

                return map;
        }

        /**
         * Caculate coord fact
         * 
         * @param {Number} totalTokenCount , size of token that tokenized by tokenizer 
         * @param {Number} hittedTokenCount
         * @returns {Number} 
         */
        _canculateCoordinationFactor(totalTokenCount, hittedTokenCount) {
                return hittedTokenCount / totalTokenCount;
        }

        /**
         * Caculate term frequency factor
         * 
         * @param {Number} tokenFrequency 
         */
        _caculateTermFrequencyFactor(tokenFrequency) {
                return Math.sqrt(tokenFrequency);
        }

        /**
         * Caculate inversed document frequency factor
         * 
         * @param {Number} documentTotalCount 
         * @param {Number} hittedDocumentCount 
         */
        _caculateInversedDocumentFrequencyFactor(documentTotalCount, hittedDocumentCount) {
                return Math.log((documentTotalCount + 1.0) / (hittedDocumentCount + 1.0)) + 1.0;
        }

        /**
         * Caculate length field nomrlization factor
         * 
         * @param {Number} hittedDocumentTokenCount 
         * @param {Number} documentTotalTokenCount 
         */
        _caculateLengthNormFactor(hittedDocumentTokenCount, documentTotalTokenCount) {
                return 1.0 / Math.sqrt(documentTotalTokenCount + 1 - hittedDocumentTokenCount);
        }

        /**
         * Ignore
         */
        _canculateQueryNormFactor() {
                return 1;
        }

}

module.exports = {
        SimpleFullTextSearcher,
        Document
}