


const { renders } = require("./renders/render")
const { Writer } = require("./writer")

class Generator {

        /**
         * 
         * @param {GeneratoraConfig} config 
         */
        constructor(config) {
                this._config = config;
                this._writer = new Writer(config.project, config.name, config.prefix);
        }

        /**
         * Write all files
         */
        generate() {
                this._generateIndex();
                this._generateAccess();
                this._generateIAccess();
                this._generateIHandler();
                this._generateItemModel();
                this._generateController();
                this._generateService();
                this._generateEntity();
                this._generateViewModel();
                this._generateEntityConfig();
                this._generateListModel();
                this._generateHandler();
        }

        /**
         * Write entity file
         * 
         * @private
         */
        _generateEntity() {
                let content = renders.renderEntity(this._config);
                this._writer.writeEntity(content);
        }

        /**
         * Write entity config file
         * 
         * @private
         */
        _generateEntityConfig() {
                let content = renders.renderEntityConfig(this._config);
                this._writer.writeEntityConfig(content);
        }

        /**
         * Write index file
         * 
         * @private
         */
        _generateIndex() {
                let content = renders.renderIndex(this._config);
                this._writer.writeIndex(content);
        }

        /**
         * Write item file
         * 
         * @private
         */
        generateItem() {
                let content = renders.renderItem(this._config);
                this._writer.writeItem(content);
        }

        /**
         * Write IAccess file
         * 
         * @private
         */
        _generateIAccess() {
                let content = renders.renderIAccess(this._config);
                this._writer.writeIAccess(content);
        }

        /**
         * Write Accss file
         * 
         * @private
         */
        _generateAccess() {
                let content = renders.renderAccess(this._config);
                this._writer.writeAccess(content);
        }

        /**
         * Write IHandler file
         * 
         * @private
         */
        _generateIHandler() {
                let content = renders.renderIHandler(this._config);
                this._writer.writeIHandler(content);
        }

        /**
         * Write handler file
         * 
         * @private
         */
        _generateHandler() {
                let content = renders.renderHandler(this._config);
                this._writer.writeHandler(content);
        }

        /**
         * Write list model file
         * 
         * @private
         */
        _generateListModel() {
                let content = renders.renderListModel(this._config);
                this._writer.writeListModel(content);
        }

        /**
         * Write item model file
         * 
         * @private
         */
        _generateItemModel() {
                let content = renders.renderItemModel(this._config);
                this._writer.writeItemModel(content);
        }

        /**
         * Write view model file
         * 
         * @private
         */
        _generateViewModel() {
                let content = renders.renderViewModel(this._config);
                this._writer.writeViewModel(content);
        }

        /**
         * Write service file
         * 
         * @private
         */
        _generateService() {
                let content = renders.renderService(this._config);
                this._writer.writeService(content);
        }

        /**
         * Write controller file
         * 
         * @private
         */
        _generateController() {
                let content = renders.renderController(this._config);
                this._writer.writeController(content);
        }
}

exports.Generator = Generator