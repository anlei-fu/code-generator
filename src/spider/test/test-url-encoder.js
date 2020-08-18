const { UrlEncoder } = require("../UrlEncoder");
var assert = require('assert');
describe('url encode test', function () {
        it('test encode', function () {
                let encoder = new UrlEncoder({"http://www.baidu.com/":"#0/","/item/":"/#1/"});
                let result =encoder.encode("http://www.baidu.com/item/12343");
                assert.equal(result,"#0/#1/12343")
        });
});