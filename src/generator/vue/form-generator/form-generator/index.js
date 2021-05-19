const { FormGenerator } = require("./FormGenerator")

function main(name, model, columns, folder) {
    let generator = new FormGenerator();

    generator.generate(name, model, columns, folder);
}

/******************************************************************main*************************************************************************/
// main(
//     "ProjectConfig",
//     [
//         {
//             label:"项目名称",
//             name:"name",
//             value:"2.2",
//         },
//         {
//             label:"公司名称",
//             name:"company",
//             value:"2.2",
//         },
//         {
//             label:"项目描述",
//             name:"description",
//             value:"2.2",
//         },
//         {
//             label:"版本",
//             name:"version",
//             value:"2.2",
//         },
//         {
//             label:"作者",
//             name:"author",
//             value:"2.2",
//         },
//     ]
// );

// main(
//     "BackendConfig",
//     [
//         {
//             label: "Jdk版本",
//             name: "jdkVersion",
//             value: "2.2",
//         },
//         {
//             label: "SpringBoot版本",
//             name: "springBootVersion",
//             value: "2.2",
//         },
//         {
//             label: "构建工具",
//             name: "buildTool",
//             value: "2.2",
//         },
//         {
//             label: "Gradle版本",
//             name: "gradleVersion",
//             value: "2.2",
//         },
//         {
//             label: "Maven版本",
//             name: "mavenVersion",
//             value: "2.2",
//         },
//         {
//             label: "包前缀",
//             name: "packagePrefix",
//             value: "2.2",
//         },
//         {
//             label: "启用Junit",
//             name: "useJUnit",
//             value: true,
//         },
//         {
//             label: "JUnit版本",
//             name: "jUnitVersion",
//             value: "2.2",
//         },
//         {
//             label: "启用Redis",
//             name: "useRedis",
//             value: true,
//         },
//         {
//             label: "Redis连接工具",
//             name: "redisTool",
//             value: "2.2",
//         },
//         {
//             label: "启用Swagger",
//             name: "userSwagger",
//             value: true,
//         },
//         {
//             label: "数据库连接池工具",
//             name: "connetionPoolTool",
//             value: "",
//         },
//         {
//             label: "数据库地址",
//             name: "dataBaseHost",
//             value: "",
//         },
//         {
//             label: "数据库端口",
//             name: "dataBasePort",
//             value: "",
//         },
//         {
//             label: "数据库用户名",
//             name: "dataBaseUser",
//             value: "",
//         },
//         {
//             label: "数据库密码",
//             name: "dataBasePassword",
//             value: "",
//         },
//         {
//             label: "数据库",
//             name: "dataBase",
//             value: "",
//         },
//     ],
//     2
// );

// main(
//     "FrontendConfig",
//     [
//         {
//             label: "Vue版本",
//             name: "vueVersion",
//             value: "2.2",
//         },
//         {
//             label: "Ui框架",
//             name: "uiFrameWorkType",
//             value: "2.2",
//         },
//         {
//             label: "Element版本",
//             name: "elementVersion",
//             value: "2.2",
//         },
//         {
//             label: "Iview版本",
//             name: "iviewVersion",
//             value: "2.2",
//         },
//         {
//             label: "启用Debug工具",
//             name: "useDebugger",
//             value: true,
//         },
//     ]
// );

main(
    "GenerateConfig",
    [
        {
            label: "生成用户手册",
            name: "userInstruction",
            value: true,
        },
        {
            label: "生成设计文档",
            name: "projectStructure",
            value: true,
        },
        {
            label: "生成表关系图",
            name: "tableRelation",
            value: true,
        },
        {
            label: "生成Sql文件",
            name: "sql",
            value: true,
        },
        {
            label: "生成Junit测试",
            name: "junitTest",
            value: true,
        },
        {
            label: "生成表信息",
            name: "tableInfo",
            value: true,
        },
        {
            label: "生成枚举类",
            name: "enum",
            value: true,
        },
        {
            label: "枚举生成常亮",
            name: "constant",
            value: true,
        },
        {
            label: "生成接口测试工具",
            name: "apiTestFile",
            value: true,
        },
        {
            label: "前段枚举类生成",
            name: "frontendConstant",
            value: true,
        },
    ],
    6
);