const { Downloader } = require("../Downloader");
var assert = require('assert');
const { async } = require("rxjs");
describe('script fetcher', function () {
        it('test fetch', async function () {
              let downloader =new Downloader({taskConfig:{}});
              let  result = await downloader.download({url:"http://www.baidu.com"});
              assert.equal(result.status,200);
              
        });
});


// async function main(){
//         let downloader =new Downloader({taskConfig:{}});
//         let  result = await downloader.download({url:"http://www.baidu.com"});
// }

// main();