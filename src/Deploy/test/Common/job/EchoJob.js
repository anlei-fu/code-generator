const { Job } = require("./../../../common/job/Job");
const { JobService } = require("./../../../common/JobService");
const { DebugUtils } = require("./../../../common/utils/debug-utils");

class EchoJob extends Job {
        constructor () {
                super({ name: "echo job", expression: "5-20 * * * * ?" });
        }

        execute(context) {
                console.log("i'm running");
                this.info(`next executing: ${this.nextExecuteDate}`);
                // this.cancel();
        }
}


function main() {
        DebugUtils.setDebugMode();
        let service = new JobService();
        let job = new EchoJob();
        service.scheduleJob(job);
}

/*************************************************main******************************************************************** */
main();