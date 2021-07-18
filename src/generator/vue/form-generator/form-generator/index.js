const { FormGenerator } = require("./FormGenerator")

function main(name, model, columns, size, labelWidth, folder) {
    let generator = new FormGenerator();

    generator.generate(name, model, columns, size, labelWidth, folder);
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

// main(
//     "GenerateConfig",
//     [
//         {
//             label: "生成用户手册",
//             name: "userInstruction",
//             value: true,
//         },
//         {
//             label: "生成设计文档",
//             name: "projectStructure",
//             value: true,
//         },
//         {
//             label: "生成表关系图",
//             name: "tableRelation",
//             value: true,
//         },
//         {
//             label: "生成Sql文件",
//             name: "sql",
//             value: true,
//         },
//         {
//             label: "生成Junit测试",
//             name: "junitTest",
//             value: true,
//         },
//         {
//             label: "生成表信息",
//             name: "tableInfo",
//             value: true,
//         },
//         {
//             label: "生成枚举类",
//             name: "enum",
//             value: true,
//         },
//         {
//             label: "枚举生成常亮",
//             name: "constant",
//             value: true,
//         },
//         {
//             label: "生成接口测试工具",
//             name: "apiTestFile",
//             value: true,
//         },
//         {
//             label: "前段枚举类生成",
//             name: "frontendConstant",
//             value: true,
//         },
//     ],
//     4,
//     120

// );

// main(
//     "AnalyzeConfig",
//     [
//         {
//             label: "数据库冗余分析",
//             name: "tableRedundency",
//             value: true,
//         },
//         {
//             label: "自动识别外键",
//             name: "foreignKeyAnalyze",
//             value: true,
//         },
//         {
//             label: "索引分析",
//             name: "foreignKeyAnalyze",
//             value: true,
//         },
//         {
//             label: "自动重名称",
//             name: "autoRename",
//             value: true,
//         },
//         {
//             label: "自动识别控件类型",
//             name: "autoControlType",
//             value: true,
//         },
//         {
//             label: "自动识别JavaType",
//             name: "autoJavaType",
//             value: true,
//         },
//         {
//             label: "代码提示",
//             name: "codeIntelligence",
//             value: true,
//         },
//         {
//             label: "级联分析",
//             name: "cascaderAnalyze",
//             value: true,
//         },
//         {
//             label: "拼写检查",
//             name: "spellCheck",
//             value: true,
//         },
//     ],
//     6
// );

// main(
//     "EnumItem",
//     [
//         {
//             label: "名称",
//             name: "name",
//             value: "",
//         },
//         {
//             label: "标签",
//             name: "label",
//             value: "",
//         },
//         {
//             label: "值",
//             name: "value",
//             value: "",
//         },
//         {
//             label: "图标",
//             name: "icon",
//             value: "",
//         },
//         {
//             label: "颜色",
//             name: "color",
//             value: "",
//         },

//     ],
//     4,
//     "small",
//     100
// );

main(
    "Enum",
    [
        {
            label: "名称",
            name: "name",
            value: "",
        },
        {
            label: "标签",
            name: "lable",
            value: "",
        },
        {
            label: "标签",
            name: "description",
            value: "",
        },

    ],
    6,
    "small"
);

// main(
//     "Checkbox",
//     [
//         {
//             label: "名称",
//             name: "name",
//             value: "",
//         },
//         {
//             label: "trueValue",
//             name: "trueValue",
//             value: "",
//         },
//         {
//             label: "falseValue",
//             name: "falseValue",
//             value: "",
//         },
//         {
//             label: "描述",
//             name: "description",
//             value: "",
//         },

//     ],
//     3,
//     "small",
//     120
// );

// main(
//     "TableEnum",
//     [
//         {
//             label: "名称",
//             name: "name",
//             value: "",
//         },
//         {
//             label: "表",
//             name: "table",
//             value: "",
//         },
//         {
//             label: "值字段",
//             name: "valueField",
//             value: "",
//         },
//         {
//             label: "标签字段",
//             name: "labelField",
//             value: "",
//         },

//         {
//             label: "排序",
//             name: "orderBy",
//             value: "",
//         },

//         {
//             label: "备注",
//             name: "description",
//             value: "",
//         },

//     ],
//     5,
//     "small",
//     100
// );

// main(
//     "TableColumn",
//     [
//         {
//             label: "名称",
//             name: "name",
//             value: "",
//         },
//         {
//             label: "标签",
//             name: "label",
//             value: "",
//         },
//         {
//             label: "数据库类型",
//             name: "sqlType",
//             value: "",
//         },
//         {
//             label: "长度",
//             name: "length",
//             value: "",
//         },

//         {
//             label: "实体字段名称",
//             name: "orderBy",
//             value: "",
//         },

//         {
//             label: "java类型",
//             name: "javaType",
//             value: "",
//         },
//         {
//             label: "备注",
//             name: "description",
//             value: "",
//         },

//         {
//             label: "默认值",
//             name: "defaultValue",
//             value: "",
//         },
//         {
//             label: "可空",
//             name: "nullable",
//             value: true,
//         },
//         {
//             label: "主键",
//             name: "isPrimaryKey",
//             value: true,
//         },
//         {
//             label: "自增",
//             name: "isAutoIncreament",
//             value: true,
//         },
//         {
//             label: "名称字段",
//             name: "isNameField",
//             value: true,
//         },
//         {
//             label: "密码字段",
//             name: "isPassword",
//             value: true,
//         },
//         {
//             label: "创建时间",
//             name: "isCreateTime",
//             value: true,
//         },
//         {
//             label: "创建人",
//             name: "isCreateUser",
//             value: true,
//         },
//         {
//             label: "更新时间",
//             name: "isUpdateTime",
//             value: true,
//         },
//         {
//             label: "更新人",
//             name: "updateUser",
//             value: "",
//         },

//         {
//             label: "可排序",
//             name: "sortable",
//             value: true,
//         },
//         {
//             label: "外键",
//             name: "isForeignKey",
//             value: true,
//         },
//         {
//             label: "关联表",
//             name: "joinTable",
//             value: "",
//         },
//         {
//             label: "关联表字段",
//             name: "relationTableField",
//             value: "",
//         },
//         {
//             label: "关系类型",
//             name: "relationType",
//             value: "",
//         },

//         {
//             label: "链接地址",
//             name: "isLink",
//             value: false,
//         },
//         {
//             label: "图片地址",
//             name: "isEmgUrl",
//             value: false,
//         },
//         {
//             label: "手机号",
//             name: "isPhoneNo",
//             value: false,
//         },
//         {
//             label: "电话号码",
//             name: "isTelNo",
//             value: false,
//         },
//         {
//             label: "身份证号",
//             name: "isIdNo",
//             value: false,
//         },

//         {
//             label: "邮政编码",
//             name: "isPostCode",
//             value: false,
//         },
//         {
//             label: "邮箱地址",
//             name: "isEmail",
//             value: false,
//         },
//         {
//             label: "格式化",
//             name: "format",
//             value: "",
//         },
//         {
//             label: "控件类型",
//             name: "controlType",
//             value: "",
//         },


//     ],
//     5,
//     "small",
//     100
// );

// main(
//     "Index",
//     [
//         {
//             label: "名称",
//             name: "name",
//             value: "",
//         },
//         {
//             label: "类型",
//             name: "indexType",
//             value: "",
//         },
//         {
//             label: "列",
//             name: "columns",
//             value: "",
//         },
//         {
//             label: "描述",
//             name: "description",
//             value: "",
//         },

//     ],
//     5,
//     "default",
//     120
// );

// main(
//     "ImportData",
//     [
//         {
//             label: "名称",
//             name: "ImportType",
//             value: "",
//         },
//         {
//             label: "选择文件",
//             name: "file",
//             value: "",
//         },

//     ],
//     5,
//     "default",
//     120
// );

// main(
//     "ExportSql",
//     [
//         {
//             label: "文件名称",
//             name: "fileName",
//             value: "",
//         },
//         {
//             label: "表",
//             name: "tables",
//             value: "",
//         },
//         {
//             label: "导出索引",
//             name: "includeIndex",
//             value: true,
//         },


//     ],
//     1,
//     "default",
//     120
// );

// main(
//     "Casscader",
//     [
//         {
//             label: "过滤表",
//             name: "filterTable",
//             value: "",
//         },
//         {
//             label: "筛选字段",
//             name: "filterField",
//             value: "",
//         },
//         {
//             label: "目标字段",
//             name: "targetField",
//             value: "",
//         },
//         {
//             label: "目标表",
//             name: "targetTable",
//             value: "",
//         },
//         {
//             label: "目标表别名",
//             name: "targetTableAlias",
//             value: "",
//         },
//         {
//             label: "目标表名称字段",
//             name: "targetTableNameField",
//             value: "",
//         },
//         {
//             label: "排序",
//             name: "orderBy",
//             value: "",
//         },
//         {
//             label: "备注",
//             name: "description",
//             value: "",
//         },

//     ],
//     5,
//     "small",
//     120
// );

main(
    "Casscader",
    [
        {
            label: "join提示",
            name: "showJoinNotice",
            value: true,
        },
        {
            label: "表枚举提示",
            name: "showTableEnumNotice",
            value: true,
        },



    ],
    5,
    "small",
    120
);

main(
    "AddControlAutoAnalyze",
    [
        {
            label: "控件类型",
            description: "控件类型",
            name: "controlType",
            show: true,
            width: "130px",
        },
        {
            label: "java类型",
            description: "java类型",
            name: "javaType",
            show: true,
            width: "120px",
        },
        {
            label: "后缀",
            description: "名称后缀",
            name: "suffixes",
            show: true,
            width: "120px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "JavaTypeAutoAnalyze",
    [
        {
            label: "sql类型",
            description: "sql类型",
            name: "sqlType",
            show: true,
            width: "130px",
        },
        {
            label: "长度范围",
            description: "长度范围",
            name: "lengthRange",
            show: true,
            width: "120px",
        },
        {
            label: "名称后缀",
            description: "名称后缀",
            name: "suffixes",
            show: true,
            width: "120px",
        },
        {
            label: "Java类型",
            description: "Java类型",
            name: "javaType",
            show: true,
            width: "120px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "QueryControlAutoAnalyze",
    [
        {
            label: "控件类型",
            description: "控件类型",
            name: "controlType",
            show: true,
            width: "130px",
        },
        {
            label: "java类型",
            description: "java类型",
            name: "javaType",
            show: true,
            width: "120px",
        },
        {
            label: "名称后缀",
            description: "名称后缀",
            name: "suffixes",
            show: true,
            width: "120px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "RuleAutoAnalyze",
    [
        {
            label: "java类型",
            description: "java类型",
            name: "javaType",
            show: true,
            width: "160px",
        },
        {
            label: "名称后缀",
            description: "名称后缀",
            name: "suffixes",
            show: true,
            width: "120px",
        },
        {
            label: "规则类型",
            description: "规则类型",
            name: "ruleType",
            show: true,
            width: "130px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "SqlDefaultValue",
    [
        {
            label: "sql类型",
            name: "sqlType",
            description: "sql类型",
            defaultValue: "newitem",
            width: "180px",
            show: true,
        },
        {
            label: "默认值",
            name: "defaultValue",
            description: "默认值",
            show: true,
        },
    ],
    5,
    "small",
    120
);

main(
    "JavaType",
    [
        {
            label: "java类型",
            description: "java类型",
            name: "javaType",
            show: true,
            width: "160px",
        },
        {
            label: "所属包",
            description: "所属包",
            name: "package",
            show: true,
            width: "160px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "ValidateRule",
    [
        {
            label: "规则名称",
            description: "规则名称",
            name: "name",
            show: true,
            width: "160px",
        },
        {
            label: "规则标题",
            description: "规则标题",
            name: "label",
            show: true,
            width: "160px",
        },
        {
            label: "后端validator代码",
            description: "控后端validator件模板",
            name: "backendValidator",
            show: true,
            width: "160px",
        },
        {
            label: "前端validator代码",
            description: "前端validator",
            name: "frontendValidator",
            show: true,
            width: "160px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "Control",
    [
        {
            label: "控件名称",
            description: "控件名称",
            name: "name",
            show: true,
            width: "160px",
        },
        {
            label: "控件类型",
            description: "控件类型",
            name: "controlType",
            show: true,
            width: "160px",
        },
        {
            label: "控件模板",
            description: "控件模板",
            name: "controlTemplate",
            show: true,
            width: "160px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "DisplayColumn",
    [
        {
            label: "表",
            description: "表",
            name: "table",
            show: true,
            width: "160px",
        },
        {
            label: "表字段",
            description: "表字段",
            name: "column",
            show: true,
            width: "160px",
        },
        {
            label: "自定义输出sql",
            description: "自定义输出sql",
            name: "customerSql",
            show: true,
            width: "160px",
        },
        {
            label: "自定义",
            description: "自定义",
            name: "customer",
            show: true,
            width: "160px",
        },
        {
            label: "别名",
            description: "别名",
            name: "alias",
            show: true,
            width: "160px",
        },
        {
            label: "格式化类型",
            description: "格式化类型",
            name: "formatType",
            show: true,
            width: "160px",
        },
        {
            label: "格式化类型",
            description: "格式化类型",
            name: "formatPattern",
            show: true,
            width: "160px",
        },
        {
            label: "默认展示",
            description: "默认展示",
            name: "defaultShow",
            show: true,
            width: "160px",
        },
        {
            label: "空值显示",
            description: "空值显示",
            name: "palceHolder",
            show: true,
            width: "160px",
        },
        {
            label: "最小宽度",
            description: "最小宽度",
            name: "minWidth",
            show: true,
            width: "160px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "FilterColumn",
    [
        {
            label: "表",
            description: "表",
            name: "table",
            show: true,
            width: "160px",
        },
        {
            label: "表字段",
            description: "表字段",
            name: "column",
            show: true,
            width: "160px",
        },
        {
            label: "自定义WhereSql",
            description: "自定义输出sql",
            name: "customerSql",
            show: true,
            width: "160px",
        },
        {
            label: "自定义Where条件",
            description: "自定义",
            name: "customer",
            show: true,
            width: "160px",
        },
        {
            label: "别名",
            description: "别名",
            name: "alias",
            show: true,
            width: "160px",
        },
        {
            label: "控件类型",
            description: "格式化类型",
            name: "controlType",
            show: true,
            width: "160px",
        },
        {
            label: "控件类型",
            description: "格式化类型",
            name: "controlPattern",
            show: true,
            width: "160px",
        },
        {
            label: "默认展示",
            description: "默认展示",
            name: "defaultShow",
            show: true,
            width: "160px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);

main(
    "AddColumn",
    [
        {
            label: "表",
            description: "表",
            name: "table",
            show: true,
            width: "160px",
        },
        {
            label: "表字段",
            description: "表字段",
            name: "column",
            show: true,
            width: "160px",
        },
        {
            label: "默认值",
            description: "默认值",
            name: "defaultValue",
            show: true,
            width: "160px",
        },
        {
            label: "校验规则",
            description: "默认值",
            name: "validateRules",
            show: true,
            width: "160px",
        },
        {
            label: "可编辑",
            description: "格式化类型",
            name: "editable",
            show: true,
            width: "160px",
        },
        {
            label: "控件类型",
            description: "格式化类型",
            name: "controlType",
            show: true,
            width: "160px",
        },
        {
            label: "控件类型",
            description: "格式化类型",
            name: "controlPattern",
            show: true,
            width: "160px",
        },
        {
            label: "默认展示",
            description: "默认展示",
            name: "defaultShow",
            show: true,
            width: "160px",
        },
        {
            label: "描述",
            description: "描述",
            name: "description",
            show: true,
            width: "120px",
        },
    ],
    5,
    "small",
    120
);