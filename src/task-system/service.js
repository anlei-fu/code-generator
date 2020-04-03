class Service{
        constructor(){
                this._serviceManager;
                this._status="stop";
                this._name="";
        }
        start(){

        }
        stop(){
             this._status="stopping";
             this._serviceManager.setServiceStatus(this._name,this._status);
             let interval=setInterval(() => {
                     if(this._status=="stopped"){
                             clearInterval(interval);
                             this._serviceManager.setServiceStatus(this._name,this._status);
                     }
             }, 100);
        }

        isRunning(){

        }
}