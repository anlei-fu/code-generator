


const { STR } = require("../../libs/str");
const { config } = require("./outputs/DMSystem--ToPlanAudience/config");
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
                this._genrateUrlMapping();
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
                this._config.addConfig.dictionaryServiceName = this._config.dictionaryServiceName;
                this._config.addConfig.dictionaryMethod = this._config.dictionaryServiceName.dictionaryMethod;
                this._config.addConfig.upperTowLetter = this._config.upperTowLetter;
                let content = renders.renderItem(this._config.addConfig);
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

        /**
         * 
         */
        _genrateUrlMapping() {
                let content = `	<UrlGroup name="/@table/Index">
           @items
   </UrlGroup>`;

                let items = `<url title="查询" name="^/@table/Index([\w/]*)$"/>`;
                if (config._delete) {
                        items += `<url title="删除" name="^/@table/Delete([\w/]*)$"/>`;
                }

                if (config.edit || config.add)
                        items += `<url title="删除" name="^/@table/Item([\w/]*)$"/>`;

                if (config.exportExcel)
                        items += `<url title="删除" name="^/@table/ExportExcel([\w/]*)$"/>`;

                if (config.BatchChangeStatus)
                        items += `<url title="删除" name="^/@table/BatchChangeStatus([\w/]*)$"/>`;

                let table = STR.upperFirstLetter(this._config.table.name);

                this._writer.writeUrlMapping(STR.replace(content, { "@items": items, "@table": table }));
        }
}

exports.Generator = Generator