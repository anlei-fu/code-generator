
const  {validateUtils} =require("./../../libs")
exports.RedisComponent= class RedisComponent{
        /**
         * 
         * @param { import('redis').RedisClient} client 
         * @param {string} name 
         */
        constructor(client,name){
                validateUtils.requireFieldsNotNull({client,name});
                this._client =client;
                this._name=name;
        }

        serialize(data){
                return JSON.stringify(data);
        }

        requireNotNull(data){
                validateUtils.requireNotNull(data);
        }
}