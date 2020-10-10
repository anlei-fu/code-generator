const {ProxyServer} =require("./ProxyServer");

function main(){
        let server =new ProxyServer("./125.log","http://localhost:6024")
        server.run(8083);
}
/*******************************main*********************************** */
main();