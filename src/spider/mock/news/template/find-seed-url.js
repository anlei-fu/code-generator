
const cheerIo = require("cheerio");
const { FILE } = require("./../../../../libs");
const { HttpClient, UrlResolver } = require("./../../../../http");

/**
 * 
 * @param {String} name 
 * @param {String} url 
 * @param {String} selector 
 * @param {Regex} regex 
 */
async function findSeedUrl(url, selector, regex) {
    regex=new RegExp(regex);
    let client = new HttpClient();
    let resolver = new UrlResolver(url);
    let content = await client.get(url);
    let $ = cheerIo.load(content);
    let data = {};
    $(selector).find("a").each((i, e) => {
        let href = $(e).attr("href");
        if (href) {
            let full = resolver.resolve(href);
            if (full && full.url) {
                if (regex.test(full.url)) {
                    data[full.url] = $(e).text();
                }
            }
        }
    });

    FILE.writeJson(`./seeds.json`, data,true);
}

exports.findSeedUrl = findSeedUrl;