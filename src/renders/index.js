const { EjsRender } = require("./EjsRender");
const { SimpleRender } = require("./SimplePatterRender");
const { checkModel } = require("./render-model-checker");
const {PackageRender} =require("./PackageRender")
module.exports = {
    EjsRender,
    SimpleRender,
    checkModel,
    PackageRender
}