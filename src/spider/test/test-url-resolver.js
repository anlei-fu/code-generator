const { UrlResolver } = require("./../UrlResolver");
var assert = require('assert');
describe('url resolver test', function () {
        it('test resolve', function () {
                let resolver = new UrlResolver("http://www.baidu.com");
                let result = resolver.resolve("/item/009?a=9");
                assert.equal(result.url, "http://www.baidu.com/item/009");
                assert.equal(result.query, "a=9")

                result =resolver.resolve("/item/#c=?15");
                assert.equal(result.url,"http://www.baidu.com/item/");
                assert.equal(result.query,"");

                result =resolver.resolve("#");
                console.log("hash is", result);
                assert.equal(result,null);

                result =resolver.resolve("http://www.163.com");
                assert.equal(result.url,"http://www.163.com");

                result =resolver.resolve("");
                assert.equal(result,null);
        });
});


// let resolver = new UrlResolver("http://www.baidu.com");
// result =resolver.resolve("http://www.163.com");