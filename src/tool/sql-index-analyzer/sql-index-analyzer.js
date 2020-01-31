const {tokenize} =require("./../tokenization/tokenizer");
const {SequenceReader}=require("./../tokenization/sequence-redner");

class AnalyzeResult{
    
}

const KEYWORDS=new Set([
    "left",
    "right",
    "full",
    "inner",
    "join",
    "where",
    "group",
    "order"
]);

class SqlIndexAnalyzer{

    constructor(){
          this._reader;
          this._aliasMap;

    }

    analyze(sql) {
        this._reader = new SequenceReader(tokenize(sql));
        while (this._reader.hasNext()) {
            let token = this._reader.next();
            switch (token) {
                case "from":
                    analyzeFrom();
                    break;
                case "left":
                    break;
                case "right":
                    break;
                case "inner":
                    break;
                case "full":
                    break;
                case "where":
                    break;
                case "group":
                    break;
                case "order":
                    break;
                default:
                    break;
            }
        }
    }

    analyzeFrom() {
        let table = this._reader.next();
        if (table.value == "(")
            return;

        let alias = this._reader.next();
        if (!KEYWORDS.has(alias.value))
            this._aliasMap.set(alias.value, table.value);
    }

    analyzeTableAlias(){

    }

    analyzeWhere(){
       while(this._reader.hasNext()){
           let token=this._reader.next();
           if(KEYWORDS.has(token.value)){
               this._reader.back();
               return;
           }

           analyzeCondition();
        
       }
    }

    analyzeCondition(){

    }

    analyzeJoin(){
        this.analyzeTableAlias();

    }
    analyzeGroupBy(){

    }

    analyzeOrderBy(){

    }

    analyzeTableColumn(){
        
    }
    
}