const { RedisComponent } = require("./RedisConponent");
class RedisMap extends RedisComponent {
        constructor () {
                super();
        }

        /**
         * Get ket set
         * 
         * @returns {Promise<[string]?>}
         */
        keys() {
                return this.createPromise((resolve) => {
                        this._redis.keys(this._name, (data) => {
                                resolve(data);
                        });
                })

        }

        /**
         * Get value set
         * 
         * @returns {Promise<[string]?>}
         */
        values() {
                return this.createPromise((resolve) => {
                        this._redis.hvals(this._name, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Get value by key
         * 
         * @param {String} key 
         * @returns {Promise<String?>}
         */
        get(key) {
                return this.createPromise((resolve) => {
                        this._redis.hget(this._name, key, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Get values by keys
         * 
         * @param {[String]} keys 
         * @returns {Promise<[string]?>}
         */
        getMany(keys = []) {
                return this.createPromise((resolve) => {
                        this._redis.hmget(this._name, keys, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Set value by key
         * 
         * @param {String} key 
         * @param {String} value 
         * @returns {Promise<number?>}
         */
        set(key, value) {
                return this.createPromise((resolve) => {
                        this._redis.hset(this._name, key, value, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Set many
         * 
         * @param {Map} map 
         */
        setMany(map) {
                return this.createPromise((resolve) => {
                        this._redis.hmset(this._name, map, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Key exists
         * 
         * @param {String} key
         * @returns {Promise<boolean?>} 
         */
        has(key) {
                return this.createPromise((resolve) => {
                        this._redis.hexists(this._name, key, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Remove value by key
         * 
         * @param {String} key 
         * @returns {Promise<boolean?>} 
         */
        remove(key) {
                return this.createPromise((resolve) => {
                        this._redis.hdel(this._name, key, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Remove values by keys
         * 
         * @param {[String]} keys 
         * @returns {Promise<number?>}
         */
        removeMany(keys = []) {
                return this.createPromise((resolve) => {
                        this._redis.hdel(this._name, keys, (data) => {
                                resolve(data);
                        });
                })
        }

        /**
         * Get the size of map
         * 
         * @returns {Promise<number?>}
         */
        size() {
                return this.createPromise((resolve) => {
                        this._redis.hlen(this._name, (data) => {
                                resolve(data);
                        });
                })
        }

}

exports.RedisMap = RedisMap