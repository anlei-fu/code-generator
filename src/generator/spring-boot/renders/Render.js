const { EntityRender } = require("./EntityRender");
const { MapperRender } = require("./MapperRender");
const { MapperConfigRender } = require("./MapperConfigRender");
const { ControllerRender } = require("./ControllerRender");
const { ServiceRender } = require("./ServiceRender");
const { ServiceImplRender } = require("./ServiceImplRender");
const { ParamRender } = require("./ParamsRender");

exports.render = {
        renderEntity: (entityConfig) => new EntityRender().renderEntity(entityConfig),
        renderMapper: (configGroup) => new MapperRender().renderMapper(configGroup),
        renderMapperConfig: (configGroup) => new MapperConfigRender().renderMapperConfig(configGroup),
        renderService: (configGroup) => new ServiceRender().renderService(configGroup),
        renderServiceImpl: (configGroup) => new ServiceImplRender().renderServiceImpl(configGroup),
        renderController: (configGroup) => new ControllerRender().renderController(configGroup),
        renderParams: (configGroup,reqType) => new ParamRender().renderParams(configGroup,reqType)
}