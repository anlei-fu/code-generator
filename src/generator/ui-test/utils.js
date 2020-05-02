/**
 * 
 * @param {[]} collection 
 * @param {(any) =>bool} matcher 
 */
async function find(page, pattern, matcher) {
        for (const c of await page.$$(pattern)) {
                let text = await page.evaluate(c => c.text, c);
                console.log(text);
               // console.log(Object.keys(c));
                // if (matcher(c)){
                //         console.log(Object.keys(c));
                //         return c;
                // }
        }

        return null;
}

async function getValue(page,local,property){

}

exports.utils = {
        find
}