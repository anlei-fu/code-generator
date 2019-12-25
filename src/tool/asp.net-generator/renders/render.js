// All renders generator needs
exports.renders = {
        renderIndex: require("./index-render").renderIndex,
        renderItem: require("./item-render").renderItem,
        renderEntity: require("./entity-render").renderEntity,
        renderService: require("./service-render").renderService,
        renderIAccess: require("./iaccess-render").renderIAccess,
        renderAccess: require("./accessRender").renderAccess,
        renderHandler: require("./handler-render").renderHandler,
        renderIHandler: require("./ihander-render").renderIHandler,
        renderEntityConfig: require("./entity-config-render").renderEntityConfig,
        renderListModel: require("./list-model-render").renderListModel,
        renderViewModel: require("./view-model-render").renderViewModel,
        renderItemModel: require("./item-model-render").renderItemModel,
        renderController: require("./controller-render").renderController,
}