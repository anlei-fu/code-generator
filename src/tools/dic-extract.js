const {FILE,STR} =require("./../libs")
function main(){
    var lines= FILE.readLines("C:/Users/Administrator.DESKTOP-B8R84PU/source/repos/Jasmine.Nlp.Common/Jasmine.Nlp.Common/Resources/dic9.txt");
    var content="";
    lines.forEach(x=>{
           if(x.trim()=="")
             return;

             content+=STR.select(x,"(",")")[0]+"\r\n";
    });
    
    FILE.write("./output/word.txt",content);
}
/***************************************************************************main*********************************************************** */
main();