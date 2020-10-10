const {PrettierFormatter} =require("./../prettierFormatter");

const formmater= new PrettierFormatter();

function main(){
     formmater.formatVueFile("./output/1.vue");
}

/*-----------------------------------------------------------main---------------------------------------*/
main();
