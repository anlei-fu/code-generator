const { PackegeRender } = require("./renders/PackageRender");
const { Writer } = require("./Writer");
const { ExpressoinGenerator } = require("./ExpressoinGenerator");
const { ColumnMerger} = require("./ColumnMerger");
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
                this.columnMerger = new ColumnMerger();
                this.render = render;
        }
}

exports.SpringBootGeneratorContext = SpringBootGeneratorContext;