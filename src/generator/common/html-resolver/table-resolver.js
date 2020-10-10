const cheerio = require("cheerio");

function resolve(html) {
        let $ = cheerio.load(html);
        let tabs = [];
        $("table").each((i, el) => {
                let headers = [];
                $(el).find("thead th").each((i1, th) => {
                        headers.push($(th).text());
                });

                let arr = [];
                $(el).find("tbody tr").each((i1, tr) => {
                        let o = {};
                        $(tr).find("td").each((i2, td) => {
                                o[headers[i2]] = $(td).text();
                        });
                        arr.push(o);
                });

                tabs.push(arr);
        });

        return tabs;
}

exports.resolve = resolve