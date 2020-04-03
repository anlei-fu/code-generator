/**
 * Clean log file
 */
class LogCleaner extends Service{

       constructor(){
            super("log-cleaner");
            this._timeoutObject;
       }
      /**
       * 
       */
      start(){
          if(!super.start())
            return;

            clean();
      }

      /**
       * @override
       */
      stop(){
          if(this._timeoutObject){
                  clearTimeout(this._timeoutObject);
          }
          this._status="stopped";
      }

      clean(){
        this._timeoutObject=  setTimeout(()=>{
                 this.clean();
          },1000);
          
      }
}