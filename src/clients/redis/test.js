const { RedisComponentProvider } = require("./RedisComponentProvider");

async function main() {
        var factory = new RedisComponentProvider({ host: "192.168.117.152" });
        let queue = factory.getQueue("test");
        let len = await queue.pushMany(["test", "test"]);
        console.log(len);

}
/********************************************************main***********************************************8888 */
main();