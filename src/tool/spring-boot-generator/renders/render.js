const { EntityRender } = require("./entity-render");
const { MapperRender } = require("./mapper-render");
const { MapperConfigRender } = require("./mapper-config-render");
const { ControllerRender } = require("./controller-render");
const { ServiceRender } = require("./service-render");
const { ServiceImplRender } = require("./serviceImpl-render");
const { ParamRender } = require("./params-render");

exports.render = {
        renderEntity: (entityConfig) => new EntityRender().renderEntity(entityConfig),
        renderMapper: (configGroup) => new MapperRender().renderMapper(configGroup),
        renderMapperConfig: (configGroup) => new MapperConfigRender().renderMapperConfig(configGroup),
        renderService: (configGroup) => new ServiceRender().renderService(configGroup),
        renderServiceImpl: (configGroup) => new ServiceImplRender().renderServiceImpl(configGroup),
        renderController: (configGroup) => new ControllerRender().renderController(configGroup),
        renderParams: (configGroup) => new ParamRender().renderParams(configGroup)
}