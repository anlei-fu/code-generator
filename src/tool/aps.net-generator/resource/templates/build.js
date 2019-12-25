const { Generator } = require("../generator")
const { config } = require("./config.js.js.js.js")

        (() => {
                let generator = new Generator(config);
                generator.generate();
        })()