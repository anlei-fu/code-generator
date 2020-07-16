const Consul = require('consul');



async function main() {
        const consul = new Consul({
                host: '192.168.117.146',
                secure:false,
                promisify: true,
        });
        try{
       await  consul.kv.set("/node/test","value");
        }
        catch(ex){
              throw ex;
        }
}

main();