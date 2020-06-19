const { FILE } = require("./utils/file");
const { DIR } = require("./utils/dir");

exports.ConfigLoader = class {

        /**
         * Load config
         * 
         * @param {String} configDir 
         * @returns {Object}
         */
        static load(configDir, mainFile = "main.json") {
                let config = FILE.readJson(`${configDir}/${mainFile}`);

                DIR.getFiles(configDir).forEach(f => {
                        if (f == mainFile)
                                return;
                        let ext = f.lastIndexOf(".");
                        let name = f;
                        if (ext != -1)
                                name = f.substr(0, ext + 1);


                        config[name] = FILE.readJson(`${configDir}/${f}`);
                });

                // do check

                return config;
        }
}

