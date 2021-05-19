/**
 * Name: 新京报
 * Domain: http://www.bjnews.com.cn/
 * Date: 10/17/2020
 */

let api = "http://www.bjnews.com.cn/webapi/getupnum?id=@id&t=0.9028159978851604&callback_getupnum=jQuery17105050714247926342_1602916712532&_=1602916712879";

/**
 * Get comment count
 * 
 * @param {Url} url 
 * @param {HttpClient} request 
 */
async function getCommet(url, request) {
        try {
                let segs = url.url.split("?")[0].split("/");
                let path =api.replace("@id",segs[segs.length-1]);
                let resp = await request.getJSONP(path,"jQuery17105050714247926342_1602916712532");
                return resp.upnum;
        } catch (ex) {
                console.error(ex);
        }
}

exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("#main > div.fl.nleft > div.title > h1").text();
    data.author = $("#main > div.fl.nleft > div.ntit > div.fl.ntit_l > span.author").text();
    data.date = $("#main > div.fl.nleft > div.ntit > div.fl.ntit_l > span.date").text();
    data.content = $("").text();
    data.upVoteCount = await getCommet(pageContext.url, pageContext.httpClient);
    $("#main > div.fl.nleft > div.content").find("img").each((i, e) => {
            let src = $(e).attr("src");
            if (src) {
                    let resolved = pageContext.urlResolver.resolve(src);
                    if (resolved)
                            src = resolved.url;
            }

            if (src) {
                    data.imgs.push({
                            src,
                            alt: $(e).attr("alt")
                    });
            }
    });
    builder.data(data);
    builder.success();
    
}