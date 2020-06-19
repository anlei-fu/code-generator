const { Job } = require("./../common/job/Job");

class EchoJob extends Job {
        constructor () {
                super({ name: "Echo", expression: "0/5 * * * * ?" });
        }

        execute(context) {
                this.info("i'm running");
        }
}

exports.EchoJob = EchoJob;