exports.JobStatus = {
        // job created but has not been scheduled
        UNSCHEDULED: 0,

        // job scheduled and wait to execute
        SCHEDULED: 1,

        // job is excuting at current
        EXECUTING: 2,

        // unknown status
        UNKNOW: 3
}