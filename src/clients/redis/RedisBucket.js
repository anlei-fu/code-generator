const { RedisComponent } = require("./RedisConponent");

class RedisBucket extends RedisComponent{
        constructor(){
                super();
                this._ttl=1000*60*60;
        }

        get(key){
            return this.createPromise(resolve=>{
                    this._redis.get(key,data=>resolve(data));
            })
        }

        set(key,value,ttl=this._ttl){
                return this.createPromise(resolve=>{
                        this._redis.set(key,value,"long",ttl,data=>resolve(data));
                })
        }

        getTtl(key){
                return this.createPromise(resolve=>{
                        this._redis.ttl(key,data=>resolve(data));
                })
        }

        setTtl(key,ttl){
                return this.createPromise(resolve=>{
                        this._redis.expireat(key,ttl,data=>resolve(data));
                })
        }

}

exports.RedisBucket =RedisBucket