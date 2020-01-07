const { SimpleFullTextSearcher } = require("./simple-full-text-searcher");
const { all } = require("./../oracle-table-info-resolver/outputs/fd/fd/all");
const { OBJECT } = require("./../../libs/utils");

function main() {
        let searcher = new SimpleFullTextSearcher();
        let docs = [];
        OBJECT.forEach(all, (tableName, table) => {
                docs.push({
                        name: tableName,
                        content: table.rawName.toLowerCase(),
                        weight: 1
                });
        })

        searcher.useCustomerTokenizer(x => x.toLowerCase().split("_"));
        searcher.addDocuments(docs);

       console.log(searcher.search("up_channel_no",10));
}

/*---------------------------------------------------------------------main------------------------------------------------------------------------------ */
main();