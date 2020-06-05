
var assert = require('assert');
const { JsExcutor } = require("./../../../Common/excutor/JsExcutor");

const EXCUTOR = new JsExcutor(`JsExcutor`);

function test() {
        describe('js excutor test', function () {
                it('run', async function () {
                        let result = await EXCUTOR.add({
                                id:1,
                                name:"test",
                                deployFolder:"/usr/project/test",
                                status:2,
                                deployShell:"deploy.sh"
                        });
                        console.log(result);
                });
        });
}

/*********************************test*************************************************** */
test();