const { RedisComponent } = require("./RedisComponent");
class RedisQueue extends RedisComponent {
        constructor (client, name) {
                super(client, name);
        }

        /**
         * Push into queue
         * 
         * @param {Any} data 
         * @returns {Promise<number>}
         */
        push(data) {
                this.requireNotNull(data);
                return new Promise((resolve, reject) => {
                        this._client.lpush(this._name, this.serialize(data), (err, number) => {
                                if (err)
                                        reject(err);

                                resolve(number);
                        })
                });
        }

        /**
         * Push many into queue
         * 
         * @param {[Any]} data 
         * @returns {Promise<number>}
         */
        pushMany(data) {
                this.requireNotNull(data);
                return new Promise((resolve, reject) => {
                        let arr = [];
                        data.forEach(x => {
                                arr.push(this.serialize(x));
                        });

                        this._client.lpush(this._name, arr, (err, number) => {
                                if (err) {
                                        reject(err);
                                        return;
                                }

                                resolve(number);
                        })
                })
        }

        /**
         * Pop a data
         * 
         * @returns {Promise<String>}
         */
        pop() {
                return new Promise((resolve, reject) => {
                        this._client.rpop(this._name, (err, data) => {
                                if (err) {
                                        reject(err);
                                        return;
                                }
                                
                                resolve(data)
                        });
                })
        }

        /**
         * Get current queue length
         * 
         * @returns {Promise<number>}
         */
        length() {
                return new Promise((resolve, reject) => {
                        let arr = [];
                        data.foreEach(x => {
                                arr.push(this.serialize(x));
                        });

                        this._client.llen(this._name, (err, number) => {
                                if (err) {
                                        reject(err);
                                        return;
                                }

                                resolve(number);
                        })
                })
        }
}

exports.RedisQueue = RedisQueue;