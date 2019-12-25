const { FILE } = require("../../libs/file")
const { STR } = require("../../libs/str")

/**
 * Use to write all files
 */
class Writer {

        /**
         * 
         * @param {String} project 
         * @param {String} name 
         * @param {String} prefix 
         */
        constructor(project, name, prefix) {
                this._project = project;
                this._name = name;
                this._prefix = prefix;
                this._patterns = {
                        "@name": this._name,
                        "@project": this._project,
                        "@prefix": this._prefix
                }
        }

        /**
         * Write entity file
         * 
         * @param {String} content 
         */
        writeEntity(content) {
                this._writeCore(`${this._prefix}${this._name}.cs`, content);
        }

        /**
         * Write entity config file
         * 
         * @param {String} content 
         */
        writeEntityConfig(content) {
                this._writeCore(`${this._name}.xml`, content);
        }

        /**
         * Write IAccess file
         * 
         * @param {String} content 
         */
        writeIAccess(content) {
                this._writeCore(`I${this._name}Access.cs`, content);
        }

        /**
         * Write Access file
         * 
         * @param {String} content 
         */
        writeAccess(content) {
                this._writeCore(`${this._name}Access.cs`, content);
        }

        /**
         * Write IHandler file 
         * 
         * @param {String} content 
         */
        writeIHandler(content) {
                this._writeCore(`I${this._name}Handler.cs`, content);
        }

        /**
         * Write Handler file
         * 
         * @param {String} content 
         */
        writeHandler(content) {
                this._writeCore(`${this._name}Handler.cs`, content);
        }

        /**
         * Write service file
         * 
         * @param {String} content 
         */
        writeService(content) {
                this._writeCore(`${this._name}Service.cs`, content);
        }

        /**
         * Write controller file
         * 
         * @param {String} content 
         */
        writeController(content) {
                this._writeCore(`${this._name}Controller.cs`, content);
        }

        /**
         * Write list model file
         * 
         * @param {String} content 
         */
        writeListModel(content) {
                this._writeCore(`${this._name}ListModel.cs`, content);
        }

        /**
         * Write view model file
         * 
         * @param {String} content 
         */
        writeViewModel(content) {
                this._writeCore(`${this._name}ViewModel.cs`, content);
        }

        /**
         * Write item model file
         * 
         * @param {String} content 
         */
        writeItemModel(content) {
                this._writeCore(`${this._name}ItemModel.cs`, content);
        }

        /**
         * Write Index file
         * 
         * @param {String} content 
         */
        writeIndex(content) {
                this._writeCore(`Index.cshtml`, content);
        }

        /**
         * Write item file
         * 
         * @param {String} content 
         */
        writeItem(content) {
                this._writeCore(`Item.cshtml`, content);
        }

        /**
         * Do replace and write
         * 
         * @private
         * @param {String} file  to save
         * @param {String} content 
         */
        _writeCore(file, content) {
                FILE.write(file, STR.replace(content, this._patterns));
        }

}

exports.Writer = Writer