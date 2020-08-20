const { JsManager } = require("../JsManager");
var assert = require('assert');
describe('script fetcher', function () {
        it('test fetch', async function () {
             let manager =new JsManager(`${__dirname}/output`,{fileHost:"http://localhost:80"});
             let main=  await manager.getMain("1.js");
             assert.equal(typeof main,"function");
        });
});

// async function main(){
//         let manager =new JsManager(`${__dirname}/output`,{fileHost:"http://localhost:80"});
//         let main=  await manager.getMain("1.js");
// }

// main();