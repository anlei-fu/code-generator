const { RedisComponent } = require("./RedisConponent");

class RedisList extends RedisComponent {
        constructor () {
                super();
                this._name = "1";
        }

        push(value) {
                return this.createPromise((resolve) => {
                        this._redis.lpush(this._name, value, (data) => {
                                resolve(data);
                        });
                })
        }

        pop() {
                return this.createPromise((resolve) => {
                        this._redis.rpop(this._name, (data) => {
                                resolve(data);
                        });
                });
        }

        len() {
                return this.createPromise((resolve) => {
                        this._redis.llen(this._name, (data) => {
                                resolve(data);
                        });
                });
        }

        pushMany(values=[]){
                return this.createPromise((resolve) => {
                        this._redis.lpush(this._name,values ,(data) => {
                                resolve(data);
                        });
                });
        }

        popMany(count){
                return this.createPromise((resolve) => {
                        this._redis.lrem(this._name,count, (data) => {
                                resolve(data);
                        });
                });
        }

        getAt(index){
                return this.createPromise((resolve) => {
                        this._redis.lindex(this._name,index, (data) => {
                                resolve(data);
                        });
                });
        }

        setAt(index,value){
                return this.createPromise((resolve) => {
                        this._redis.lset(this._name,index,value,(data) => {
                                resolve(data);
                        });
                });
        }

        removeAt(index){
                return this.createPromise((resolve) => {
                        this._redis.ltrim(this._name,index,index,value,(data) => {
                                resolve(data);
                        });
                }); 
        }

        removeRange(startPos,length){
                return this.createPromise((resolve) => {
                        this._redis.ltrim(this._name,startPos,startPos+length,value,(data) => {
                                resolve(data);
                        });
                }); 
        }

}

exports.RedisList =RedisList