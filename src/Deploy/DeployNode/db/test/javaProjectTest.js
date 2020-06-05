
var assert = require('assert');
const { JavaProjectAccess } = require("./../JavaProjectDbAccess");

const ACCESS = new JavaProjectAccess(`JavaProjectAccess`);

function test() {
        describe('Java project', function () {
                it('add', async function () {
                        let result = await ACCESS.add({
                                id:1,
                                name:"test",
                                deployFolder:"/usr/project/test",
                                status:2,
                                deployShell:"deploy.sh"
                        });
                        console.log(result);
                });
                it('getall', async function () {
                        let result = await ACCESS.getAll();
                        console.log(result);
                });

                it('getById', async function () {
                        let result = await ACCESS.getById(1);
                        console.log(result);
                });

                it('updateById', async function () {
                        let result = await ACCESS.updateById(1,{status:3});
                        console.log(result);
                });

                it('deleteById', async function () {
                        let result = await ACCESS.deleteById(1);
                        console.log(result);
                });




        });
}

/*********************************test*************************************************** */
test();