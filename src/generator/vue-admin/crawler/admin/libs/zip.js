const zipper = require("zip-local");
const {LoggerFactory} =require("./../tool/logging/logger-factory");

const LOG= LoggerFactory.getLogger("ZIP");

function zipFile(source, output) {
    output = output.endsWith(".zip") ? output : `${output}.zip`;
    zipper.sync.zip(source).compress().save(output);
    LOG.info("compress finished!");
    
}

function unzipFile(source, output) {
    zipper.sync.unzip(source).compress().save(output);
    LOG.info("uncompress finished!");
}

exports.ZIP = {
    zipFile,
    unzipFile,
}

