const { generate } = require("../../model/model-generator");
const { TableRelationAnalyzer } = require("../../../table-analyzer/TableRelationAnalyzer");
const { FILE } = require("../../../../libs/file");
const { OBJECT } = require("../../../../libs/utils");



async function resolve(dbConfig, db, outputFolder) {
        await generate(dbConfig,
                db,
                outputFolder);
        let all = require(`${outputFolder}/all.js`).all;
        delete all.SystemDictionary;

        // generate table relation
        const relationAnalyzer = new TableRelationAnalyzer(all);
        let relations = relationAnalyzer.analyze();
        FILE.write(`${outputFolder}/relations.js`, OBJECT.export_(relations, "relations"));
}

module.exports.resolve = resolve;