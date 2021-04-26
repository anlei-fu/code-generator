const { CLI, DIR } = require("./../../libs");
const { LoggerFactory } = require("./../../logging");

const LOG = LoggerFactory.getLogger("java-formmater");

class GoogleJavaFormatter {
        /**
         * Format all java file in folder
         * Java installed and available
         * 
         * @param {String} folder 
         */
        formatFolder(folder) {
                DIR.getFiles(folder).forEach(file => {
                        if (file.toLowerCase().endsWith(".java")) {
                                try {
                                        this.formatJavaFile(`${folder}/${file}`);
                                        LOG.info(`${folder}/${file}  formatted`);
                                } catch (ex) {
                                        LOG.error(`${folder}/${file} format failed`, ex)
                                        console.log(ex);
                                }
                        }
                });

                DIR.getFolders(folder).forEach(fd => {
                        this.formatFolder(`${folder}/${fd}`);
                });
        }

        /**
         * Format js file
         * 
         * @param {String} file 
         */
        formatJavaFile(file) {
                CLI.excute(`java -jar ${__dirname}/resource/google-java-format-1.7-all-deps.jar -replace --aosp  ${file}`);
        }
}

exports.GoogleJavaFormatter = GoogleJavaFormatter