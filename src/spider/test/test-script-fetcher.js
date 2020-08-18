const { ScriptFetcher } = require("../ScripFetcher");
describe('script fetcher', function () {
        it('test fetch', function () {
              let fetcher =new ScriptFetcher(`${__dirname}/output`);
              fetcher.fetch("http://localhost:80/","1.js");
        });
});