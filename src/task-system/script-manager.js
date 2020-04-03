class ScriptManager{

        constructor(){
                this._scripts =new Map();
                this._root="";
                this._gitFile="";
                this._cliExcutor={};
                this._fetchInterval=1000;
        }
        
        
        run(){
              setInterval(this._fetchInterval,fetch);
        }

        clear(){
             this._scripts.clear();
        }

        set(path,target){
             this._scripts.set(path,target);
        }

        get(path){
             if(this._scripts.has(path))
                return this._scripts.get(path);
             
             try{
                     let {main}=require(path);
                     this.set(path,main);
                     return main;
             }catch(error){
                     return null;
             }
        }

        fetch(){
             if(this._cliExcutor.excute()){

             }else{

             }
        }


}