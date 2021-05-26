const { FILE, RANDOM ,DATE} = require("../../src/libs");
const { HttpClient } = require("./../../src/http")

async function main() {
        let nonce = RANDOM.guid().substr(0, 16);
        let timestamp = parseInt(new Date().getTime() / 1000);
        let access_token = "925b44bfd64fb3a9e1f8f3b0be88a708";
        let client = new HttpClient();
        let url = `https://api.e.qq.com/v1.3/user_actions/add?access_token=${access_token}&timestamp=${timestamp}&nonce=${nonce}`;

        let config = FILE.readJson("1.json");
        config.actions[0].action_time = parseInt(new Date().getTime() / 1000);
        let resp = await client.post(url, config);
        console.log(resp);
}

main();