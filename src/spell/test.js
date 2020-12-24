const {SpellChecker} =require("./SpellChecker");

function main(){
 let checker =new SpellChecker();
     checker.load("./dic/english.txt");
     console.log(checker.findMostPossibleWords("engnish"));

}

/******************************************************main*********************************************************/
main();