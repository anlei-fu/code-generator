const redis = require("redis");

class RedisComponent {
        /**
         * 
         * @param {RedisClient} client 
         */
        constructor () {
                this._redis = redis.createClient();
                this._name = "";
        }

        createPromise(handler) {
                return new Promise((resolve, reject) => {
                        try {
                               if(!handler(resolve))
                                  reject(new Error("operate failed"));
                        } catch (ex) {
                                reject(ex);
                        }
                });
        }

        clear(){
                
        }


}

exports.RedisComponent = RedisComponent;