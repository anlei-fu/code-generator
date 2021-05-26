const cheerio = require("cheerio");

function resolve(html) {
        let $ = cheerio.load(html);
        let tabs = [];
        $("table").each((i, el) => {
                let headers = [];
                $(el).find("th").each((i1, th) => {
                        headers.push($(th).text().trim());
                });

                let arr = [];
                $(el).find("tr").each((i1, tr) => {
                        let o = {};
                        $(tr).find("td").each((i2, td) => {
                                o[headers[i2]] = $(td).text().trim();
                        });
                        arr.push(o);
                });

                tabs.push(arr);
        });

        return tabs;
}

exports.resolve = resolve