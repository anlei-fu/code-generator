const { utils } = require("./utils")
/**
 * 
 * @param {*} page 
 * @param {String} path 
 */
async function toTargePage(page, path) {

        let segs = path.split("/");
        let result = await utils.find(page,".nav_list_right a","text", x => x == segs[0]);

        // if (!result) {
        //         console.log("faild to find l1");
        //         return;
        // }
        //console.log(result);

       // page.click(result);

        result = await utils.find(page, ".con_left_nav span","text", x => x== segs[1]);
        // if (!result) {
        //         console.log("faild to find l2");
        //         return;
        // }

       // $(result).click();

        result = utils.find(page, ".con_left_nav a","text", x => x == segs[2]);
        // if (!result) {
        //         console.log("faild to find l3");
        //         return;
        // }

}

async function submit(frame) {
        frame.$(".list_submit").click();
}

async function setTimeFilter(frame, start, end) {
        frame.$("#s")
}

async function findAllItem() {

}

exports.toTargePage = toTargePage;