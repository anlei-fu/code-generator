const { TestGenerator } = require("./test-generator");
const { TestBuilder } = require("./test-config-builders");
const { FILE } = require("./../../libs/file");

function main() {
        let builder = new TestBuilder();

        let config = builder.name("test2")
                .description("test all modules")
                .module("contract management", 61, 133, builder => {
                        builder.menu("contract query", 115, 279, menuBuilder => {
                                menuBuilder
                                        .select("contract type", 960, 285, 2)
                                        .select("contract status", 1260, 284, 6)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(1742, 285)
                                                        .option(1339, 280, "125")
                                                        .option(1443, 287, "214")
                                                        .option(1535, 282, "118")
                                        })
                                        .timeRange("create time", 341, 286)
                                        .query(288, 343)
                        })
                                .menu("sign query", 95, 329, menuBuilder => {
                                        menuBuilder.select("subject type", 956, 286, 2)
                                                .select("sign status", 1260, 286, 6)
                                                .select("pay status", 1565, 285, 4)
                                                .select("need pay", 534, 338, 2)
                                                .select("contract type", 839, 338, 2)
                                                .select("contract status", 1139, 337, 6)
                                                .radioGroup("", radioBuilder => {
                                                        radioBuilder.input(1607, 337)
                                                                .option(1230, 337, "test")
                                                                .option(1318, 339, "214")
                                                                .option(1394, 3402, "181")
                                                })
                                                .timeRange("create time", 341, 286)
                                                .query(1695, 343)
                                });
                }, true)
                .module("user management", 162, 132, builder => {
                        builder.menu("user account", 88, 264, menuBuilder => {
                                menuBuilder.select("verify status", 958, 285, 4)
                                        .timeRange("create time", 341, 286)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(1446, 287)
                                                        .option(1039, 292, "1810834")
                                                        .option(1094, 291, "@qq")
                                                        .option(1167, 286, "fua")
                                                        .option(1241, 287, "51340119950213")
                                        })
                                        .query(1538, 291)
                        }).menu("user real", 79, 333, menuBuilder => {
                                menuBuilder.timeRange("create time", 341, 286)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(1103, 285)
                                                        .option(739, 284, "zhou")
                                                        .option(814, 288, "5134")
                                                        .option(900, 288, "181")
                                        })
                                        .query(1199, 288)
                        }).menu("user company", 86, 383, menuBuilder => {
                                menuBuilder.select("verify status", 957, 285, 4)
                                        .select("organization type", 1262, 284, 2)
                                        .timeRange("create time", 341, 286)
                                        .query(304, 340)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(1847, 286)
                                                        .option(1349, 291, "abc")
                                                        .option(1414, 285, "5314")
                                                        .option(1533, 288, "181")
                                                        .option(1599, 284, "510")

                                        })
                        });
                })
                .module("asset change", 244, 137, builder => {
                        builder.menu("purchase record", 59, 269, menuBuilder => {
                                menuBuilder.select("meal type", 966, 287, 2)
                                        .select("pay status", 1282, 286, 4)
                                        .select("pay platform", 1598, 289, 2)
                                        .timeRange("create time", 341, 286)
                                        .query(725, 340)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(667, 338)
                                                        .option(439, 343, "5314")
                                                        .option(279, 344, "181")
                                                        .option(364, 340, "510")

                                        })
                        }).menu("consume record", 122, 326, menuBuilder => {
                                menuBuilder.timeRange("create time", 341, 284)
                                        .select("consume type", 955, 286, 2)
                                        .select("contract type", 1261, 286, 2)
                                        .query(1697, 292)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(1629, 287)
                                                        .option(1343, 283, "5314")
                                                        .option(1421, 292, "181")
                                        })
                        })
                })
                .module("system config", 356, 135, builder => {
                        builder.menu("meal config", 134, 282, menuBuilder => {
                                menuBuilder.select("meal type", 1235, 282, 2)
                                        .select("meal status", 1536, 283, 2)
                                        .timeRange("create time", 341, 286)
                                        .query(1635, 286)
                        }).menu("dic config", 93, 329, menuBuilder => {
                                menuBuilder.timeRange("create time", 341, 286)
                                        .query(623, 288)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(528, 283)
                                                        .option(336, 290, "MealType")
                                                        .option(267, 288, "个人套餐")
                                        })
                        }).menu("log query", 103, 381, menuBuilder => {
                                menuBuilder.timeRange("create time", 341, 286)
                                        .query(1209, 295)
                                        .radioGroup("", radioBuilder => {
                                                radioBuilder.input(1097, 286)
                                                        .option(1097, 286, "合同")
                                                        .option(811, 288, "查询失败")
                                                        .option(898, 284, "1065,异常描述")
                                        })
                        }).menu("log query", 113, 426, menuBuilder => {
                                menuBuilder.timeRange("create time", 341, 286)
                                        .query(1209, 295)
                        })
                }, false)
                .build();


        let generator = new TestGenerator();

        let commands = generator.generate(config);
        let root = "C:/Users/Administrator/Desktop/Projects/ui-test/UiTets/bin/Debug/project/新建文件夹";
        FILE.write(`${root}/${commands.Name}.json`, JSON.stringify(commands, null, "\t"));

}

/******************************************************main**************************************************************************************8*/
main();