const {FILE,STR} =require("./../libs");
const MARKS=[
    "，",
    "。",
    "？",
    "！",
    "@",
    "“",
    "”",
    ".",
    "?",
    '"',
    "、",
    ":",
    "：",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "{",
    "}",
    "\\",
    "/",
    "<",
    ">",
    "~",
    "`",
    "：",
    "；",
    ";",
    ":",
    "u",
    "》",
    "《"
];

function main(file){
    let content="";
   FILE.readLines(`C:/Users/Administrator.DESKTOP-B8R84PU/source/repos/Jasmine.Nlp.Common/Jasmine.Nlp.Test/Output/${file}`).forEach(x=>{
         
        if(STR.includesAny(x,MARKS))
          return;

          content+=x+"\r\n";
   });

   FILE.write(`C:/Users/Administrator.DESKTOP-B8R84PU/source/repos/Jasmine.Nlp.Common/Jasmine.Nlp.Test/Output/copy_${file}`,content);
}

main("tow_2021_02_21_17_38.txt");