exports.TaskStatus = {

        // wait to schedule
        WAIT: 1,

        // sheduled but wait to execute
        SHEDULED: 2,

        // excuting
        EXCUTING: 3,

        // pausing
        PAUSING: 4,

        // execute fanished and failed
        FAILED: 5,

        // execute fanished and succeed
        SUCCESS: 6,

        // execute fanished and exceptionaly
        EXCEPTION: 7
}