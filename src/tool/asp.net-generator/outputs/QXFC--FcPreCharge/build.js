const { Generator } = require("./../../generator")
const { config } = require("./config.js")


let generator = new Generator(config);
generator.generate();