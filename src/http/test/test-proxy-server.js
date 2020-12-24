const {ProxyServer} =require("./../ProxyServer");

function main(){

        let server =new ProxyServer("http://182.140.244.58:9098/");
        server.run(8090);
}
/************************************************main**************************************************8 */
main();