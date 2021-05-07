const {SequenceReader} =require("./sequence-reader");
const {CharSequenceReader} =require("./char-sequence-reader");
const {Token,TOKEN_TYPE} =require("./token");
const {tokenize} =require("./tokenizer");

module.exports={
        SequenceReader,
        CharSequenceReader,
        Token,
        TOKEN_TYPE,
        tokenize
}