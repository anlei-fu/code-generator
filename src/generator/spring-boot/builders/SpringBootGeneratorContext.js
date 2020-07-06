const { PackegeRender } = require("./../renders/PackageRender");
const { Writer } = require("./../Writer");
const { ExpressoinGenerator } = require("./../ExpressoinGenerator");
const { ColumnMerger } = require("./../ColumnMerger");
const { render } = require("./../renders/Render");
const { MockGenerator } = require("./../../mock/mock-generator")

/**
 * Components and global-config container 
 */
class SpringBootGeneratorContext {
        constructor (project, company,mockConfig) {
                this.writer = new Writer(project, company);
                this.packageRender = new PackegeRender(project, company);
                this.project = project;
                this.company = company;
                this.cache = new Map();
                this.expressionGenerator = new ExpressoinGenerator();
                this.columnMerger = new ColumnMerger();
                this.render = render;
                this.mockGenerator = new MockGenerator();

                this.mockGenerator.useMockConfig(mockConfig);
        }
}

exports.SpringBootGeneratorContext = SpringBootGeneratorContext;