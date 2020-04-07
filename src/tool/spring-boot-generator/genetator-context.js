const { PackegeRender } = require("./renders/package-render");
const { Writer } = require("./writer");
const { ExpressoinGenerator } = require("./expression-generator");
const { ColumnAnalyzer } = require("./column-analyzer");
const {render}=require("./renders/render");

/**
 * Components and global-config container 
 */
class GeneratorContext {
        constructor (project, company) {
                this.writer = new Writer(project, company);
                this.packageRender = new PackegeRender(project, company);
                this.project = project;
                this.company = company;
                this.cache = new Map();
                this.expressionGenerator = new ExpressoinGenerator();
                this.columnAnalyzer = new ColumnAnalyzer();
                this.render=render;
        }
}

exports.GeneratorContext=GeneratorContext;