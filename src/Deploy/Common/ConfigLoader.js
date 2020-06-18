const { FILE } = require("./utils/file");
const { DIR } = require("./utils/dir");

exports.ConfigLoader = class {

        /**
         * Load config
         * 
         * @param {String} configDir 
         * @returns {Object}
         */
        static load(configDir) {
                let config = FILE.readJson(`${configDir}/main.json`);

                DIR.getFiles(configDir).forEach(f => {
                        if (f == "main.json" || !f.endsWith(".json"))
                                return;

                        config[f.replace(".json", "")] = FILE.readJson(`${configDir}/${f}`);
                });

                return config;
        }
}

