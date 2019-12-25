


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

        generate() {

                this.generateIndex();

                this.generateAccess();
                this.generateIAccess();
                this.generateIHandler();
                this.generateItemModel();
                this.generateController();
                this.generateService();
                this.generateEntity();
                this.generateViewModel();
                this.generateEntityConfig();
                this.generateListModel();
                this.generateHandler();
                this.generateIHandler();

                // if (config.add || config.edit)
                //         this.generateItem();

                // if (config.importExcel)
                //         this.generateImportExcel(config);

                // if (config.exportExcel)
                //         this.generateExportExcel(config)
        }

        /**
         * Write entity file
         */
        generateEntity() {
                let content = renders.renderEntity(this._config);
                this._writer.writeEntity(content);
        }

        /**
         * Write entity config file
         */
        generateEntityConfig() {
                let content = renders.renderEntityConfig(this._config);
                this._writer.writeEntityConfig(content);
        }

        /**
         * Write index file
         */
        generateIndex() {
                let content = renders.renderIndex(this._config);
                this._writer.writeIndex(content);
        }

        /**
         * Write item file
         */
        generateItem() {
                let content = renders.renderItem(this._config);
                this._writer.writeItem(content);
        }

        /**
         * Write IAccess file
         */
        generateIAccess() {
                let content = renders.renderIAccess(this._config);
                this._writer.writeIAccess(content);
        }

        /**
         * Write Accss file
         */
        generateAccess() {
                let content = renders.renderAccess(this._config);
                this._writer.writeAccess(content);
        }

        /**
         * Write IHandler file
         */
        generateIHandler() {
                let content = renders.renderIHandler(this._config);
                this._writer.writeIHandler(content);
        }

        /**
         * Write handler file
         */
        generateHandler() {
                let content = renders.renderHandler(this._config);
                this._writer.writeHandler(content);
        }

        /**
         * Write list model file
         */
        generateListModel() {
                let content = renders.renderListModel(this._config);
                this._writer.writeListModel(content);
        }

        /**
         * Write item model file
         */
        generateItemModel() {
                let content = renders.renderItemModel(this._config);
                this._writer.writeItemModel(content);
        }

        /**
         * Write view model file
         */
        generateViewModel() {
                let content = renders.renderViewModel(this._config);
                this._writer.writeViewModel(content);
        }

        /**
         * Write service file
         */
        generateService() {
                let content = renders.renderService(this._config);
                this._writer.writeService(content);
        }

        generateController() {
                let content = renders.renderController(this._config);
                this._writer.writeController(content);
        }
}

exports.Generator = Generator