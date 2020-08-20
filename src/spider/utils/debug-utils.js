
const { StopWatch } = require("./../StopWatch");

const WATHC_MAP = new Map();

/**
 * Set current mode is debug
 */
function setDebugMode() {
        if (!global.DEBUG) {
                console.log("Debug mode set");
                global.DEBUG = true;
        }
}

/**
 * Check current mode is debug
 */
function isDebugMode() {
        return global.DEBUG;
}

/**
 * Start a new stop watch
 * 
 * @param {Number} id 
 */
function setStopWatch(id) {
        let watch = new StopWatch();
        WATHC_MAP.set(id, watch);
        watch.start();
}

/**
 * Get the elapsed
 * 
 * @param {Number} id 
 * @returns {String?}
 */
function getElapsed(id) {
        let watch = WATHC_MAP.get(id);
        if (watch)
                return watch.elapsed;
}

exports.DebugUtils = {
        setDebugMode,
        isDebugMode,
        setStopWatch,
        getElapsed
}