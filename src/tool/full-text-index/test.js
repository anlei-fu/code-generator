const { SimpleFullTextSearcher } = require("./simple-full-text-searcher");

function main() {
        let searcher = new SimpleFullTextSearcher();
        let documents = [
                {
                   content:"falsdsadada",
                   name:"t1"
                },
                {
                        content:"14545sadsar",
                        name:"t2"
                },
                {
                        content:"45454s5ad4asr",
                        name:"t3"
                },
                {
                        content:"dasdfasd4a545496",
                        name:"t4"
                },
                {
                        content:"sdsad546419649w8q49dsa",
                        name:"t5"
                },

        ]

        searcher.addDocuments(documents);

        let result= searcher.search("d5as6",5);

        console.log(result);
}

/*---------------------------------------------------------------------main------------------------------------------------------------------------------ */
main();