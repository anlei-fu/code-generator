class LogConfig{
      constructor(){
              this.logFileFolder="";
              this.infoExpire="";
              this.errorExpire="";
      }
}

class ExcuterConfig{
        constructor(){
                this.maxConcurrency=100;
        }
}

class NotifyConfig{
        constructor(){
                this.maxRetry="";
        }
}

class WorkerConfig{
        constructor(){
              this.useServiceDiscovery=false;
              this.logConfig =new LogConfig();
        }
}