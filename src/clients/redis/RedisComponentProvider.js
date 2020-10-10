const redis = require("redis");
const { RedisQueue } = require("./RedisQueue");

class RedisComponentProvider {
        /**
         * 
         * @param {import("redis").ClientOpts} redisConfig 
         */
        constructor (redisConfig) {
                this._client = redis.createClient(redisConfig);
        }

        /**
         * Get a queue
         * 
         * @param {String} name 
         * @returns {RedisQueue}
         */
        getQueue(name) {
                return new RedisQueue(this._client, name);
        }
}

exports.RedisComponentProvider = RedisComponentProvider