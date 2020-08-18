const { UrlDecoder } = require("../UrlDecoder");
var assert = require('assert');
describe('url encode test', function () {
        it('test encode', function () {
                let decoder = new UrlDecoder({"http://www.baidu.com/":"#0/","/item/":"/#1/"});
                let result =decoder.decode("#0/#1/12343");
                assert.equal(result,"http://www.baidu.com/item/12343");
        });
});