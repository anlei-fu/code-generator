const { PackegeRender } = require("./renders/PackageRender");
const { Writer } = require("./Writer");
const { ExpressoinGenerator } = require("./ExpressoinGenerator");
const { ColumnAnalyzer } = require("./ColumnAnalyzer");
const { render } = require("./renders/Render");

/**
 * Components and global-config container 
 */
class SpringBootGeneratorContext {
        constructor (project, company) {
                this.writer = new Writer(project, company);
                this.packageRender = new PackegeRender(project, company);
                this.project = project;
                this.company = company;
                this.cache = new Map();
                this.expressionGenerator = new ExpressoinGenerator();
                this.columnAnalyzer = new ColumnAnalyzer();
                this.render = render;
        }
}

exports.SpringBootGeneratorContext = SpringBootGeneratorContext;