const prettier = require("prettier");
const { FILE } = require("./../../../libs/file");
const { DIR } = require("./../../../libs/dir");
const { LoggerFactory } = require("./../logging/logger-factory");
const LOG = LoggerFactory.getLogger("prettier-formmater");

const JS_FORMAT_CONFIG = {
        useTabs: true,
        tabWidth: 1,
        parser: "babel",
        proseWrap: "always"
}

const VUE_FORMAT_CONFIG = {
        useTabs: false,
        tabWidth: 2,
        vueIndentScriptAndStyle: true,
        htmlWhitespaceSensitivity: "ignore",
        parser: "vue",
        printWidth: 100,
}

/**
 * Prettier formatter wrapper
 */
class PrettierFormatter {

        /**
         * Format all js file in folder
         * 
         * @param {String} folder 
         */
        formatJsFolder(folder) {
                DIR.getFiles(folder).forEach(file => {
                        if (file.toLowerCase().endsWith(".js")) {

                                try {
                                        this.formatJsFile(`${folder}/${file}`);
                                        LOG.info(`${folder}/${file}  formatted`);
                                } catch (ex) {
                                        LOG.error(`${folder}/${file} format failed`, ex)
                                        console.log(ex);
                                }
                        }
                });

                DIR.getFolders(folder).forEach(fd => {
                        this.formatJsFolder(`${folder}/${fd}`);
                });
        }

        /**
         * Format all vue file in folder
         * 
         * @param {String} folder
         */
        formatVueFolder(folder) {
                DIR.getFiles(folder).forEach(file => {
                        if (file.toLocaleLowerCase().endsWith(".vue")) {
                                try {
                                        this.formatVueFile(`${folder}/${file}`);
                                        LOG.info(`${folder}/${file}  formatted`);
                                } catch{
                                        LOG.error(`${folder}/${file}  failed`);
                                }
                        }
                });

                DIR.getFolders(folder).forEach(fd => {
                        this.formatVueFolder(`${folder}/${fd}`);
                });
        }

        /**
         * Format js file
         * 
         * @param {String} file 
         */
        formatJsFile(file) {
                FILE.write(file, this.formatJsContent(FILE.read(file)));
        }

        /**
         * Format vue file
         * 
         * @param {String} file
         */
        formatVueFile(file) {
                FILE.write(file, this.formatVueContent(FILE.read(file)));
        }

        /**
         * Format js content
         * 
         * @param {String} input 
         * @returns {string}
         */
        formatJsContent(input) {
                return prettier.format(input, JS_FORMAT_CONFIG);
        }

        /**
         * Format vue content
         * 
         * @param {String} input 
         * @returns {String}
         */
        formatVueContent(input) {
                return prettier.format(input, VUE_FORMAT_CONFIG);
        }
}

exports.PrettierFormatter = PrettierFormatter