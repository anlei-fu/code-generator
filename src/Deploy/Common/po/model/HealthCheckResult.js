exports.HealthCheckResult = class {
        constructor () {
                this.cpuMax = 0;
                this.cpuMean = 0;

                this.cpuTime = 100;

                this.swapMax = 100;
                this.swapMaxPercent = 0.78;
                this.swapMean = 1000;
                this.swapMeanPercent = 0.65;

                this.memoryMax = 100;
                this.memoryMaxPercent = 0.8;
                this.memoryMean = 100;
                this.memoryMeanPercent = 0.8;

                this.diskMax = 100;
                this.diskMaxPercent = 0.7;
                this.diskMean = 100;
                this.diskMeanPercent = 0.78;

                this.networkMax = 100;
                this.networkMaxPercent = 0.32;
                this.networkMean = 100;
                this.networkMeanPercent = 0.21;

                this.healthStatus = 1;

                this.startTime = new Date();
                this.endTime = new Date();

                this.log="";
        }
}