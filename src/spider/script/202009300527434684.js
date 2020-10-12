let api = "https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/";
exports.main = async (pageContext)=>{
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;
        let request = pageContext.httpClient;

        var data = {

        };

        data.imgs = [];


        let url = pageContext.url;
        try {
                let segs = url.url.split("?")[0].split("/");

                let resp = await request.get(`${api}${segs[segs.length - 1].replace(".html", "")}`);
                data.comment=resp.cmtCount;
               
        } catch (ex) {
          console.error(ex);
        }

        data.title = $("#epContentLeft > h1").text();
        data.author = $("#ne_article_source").text();
        $("#ne_article_source").remove();
        data.date = $("#epContentLeft > div.post_time_source").text();
        $("#contain > div > div.article_box > div.statement").remove();
        data.content = $("#endText").text();
       
        $("#endText").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        builder.data(data);
        builder.success();
}