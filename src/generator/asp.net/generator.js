


const { renders } = require("./renders/render")
const { Writer } = require("./writer")

class Generator {

        /**
         * 
         * @param {GeneratoraConfig} config 
         */
        constructor (config) {
                this._config = config;
                this._writer = new Writer(config.project, config.name, config.prefix);
        }

        /**
         * Generate all files
         */
        generate() {
                if (this._config.add || this._config.edit)
                        this._generateItem();

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
         * Generate entity file
         * 
         * @private
         */
        _generateEntity() {
                let content = renders.renderEntity(this._config);
                this._writer.writeEntity(content);
        }

        /**
         * Generate entity config file
         * 
         * @private
         */
        _generateEntityConfig() {
                let content = renders.renderEntityConfig(this._config);
                this._writer.writeEntityConfig(content);
        }

        /**
         * Generate index file
         * 
         * @private
         */
        _generateIndex() {
                let content = renders.renderIndex(this._config);
                this._writer.writeIndex(content);
        }

        /**
         * Generate item file
         */
        _generateItem() {
                let content = renders.renderItem(this._config.addConfig);
                this._writer.writeItem(content);
        }

        /**
         * Generate item file
         * 
         * @private
         */
        generateItem() {
                let content = renders.renderItem(this._config);
                this._writer.writeItem(content);
        }

        /**
         * Generate IAccess file
         * 
         * @private
         */
        _generateIAccess() {
                let content = renders.renderIAccess(this._config);
                this._writer.writeIAccess(content);
        }

        /**
         * Generate Accss file
         * 
         * @private
         */
        _generateAccess() {
                let content = renders.renderAccess(this._config);
                this._writer.writeAccess(content);
        }

        /**
         * Generate IHandler file
         * 
         * @private
         */
        _generateIHandler() {
                let content = renders.renderIHandler(this._config);
                this._writer.writeIHandler(content);
        }

        /**
         * Generate handler file
         * 
         * @private
         */
        _generateHandler() {
                let content = renders.renderHandler(this._config);
                this._writer.writeHandler(content);
        }

        /**
         *Generate list model file
         * 
         * @private
         */
        _generateListModel() {
                let content = renders.renderListModel(this._config);
                this._writer.writeListModel(content);
        }

        /**
         * Generate item model file
         * 
         * @private
         */
        _generateItemModel() {
                let content = renders.renderItemModel(this._config);
                this._writer.writeItemModel(content);
        }

        /**
         * Generate view model file
         * 
         * @private
         */
        _generateViewModel() {
                let content = renders.renderViewModel(this._config);
                this._writer.writeViewModel(content);
        }

        /**
         * Generate service file
         * 
         * @private
         */
        _generateService() {
                let content = renders.renderService(this._config);
                this._writer.writeService(content);
        }

        /**
         * Generate controller file
         * 
         * @private
         */
        _generateController() {
                let content = renders.renderController(this._config);
                this._writer.writeController(content);
        }
}

exports.Generator = Generator