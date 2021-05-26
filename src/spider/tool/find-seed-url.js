const cheerIo = require("cheerio");
const { FILE, OBJECT, DIR } = require("./../../libs");
const { HttpClient, UrlResolver } = require("./../../http");

/**
 * 
 * @param {String} name 
 * @param {String} url 
 * @param {String} selector 
 * @param {Regex} regex 
 */
async function main(name, url, selector, regex) {
    let client = new HttpClient();
    let resolver = new UrlResolver(url);
    let content = await client.get(url);
    let $ = cheerIo.load(content);
    let data = {};
    DIR.create(`./output/${name}`);
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

    FILE.writeJson(`./output/${name}/seeds.json`,data);
}
/*******************************************************main***********************************************************************/
 main(
    "zhonghuawang",
    "https://www.china.com/",
    "body > div.siteNav > div",
    new RegExp(".*")
);