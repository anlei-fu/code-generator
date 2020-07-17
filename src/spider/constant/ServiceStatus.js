exports.ServiceStatus = {
        // Begin starting service
        STARTING: 100,

        // Service fully started
        STARTED: 101,

        // Service begin stopping
        STOPPING: 108,

        // Service fully stopped
        STOPPED: 109,

        // Service begin pausing
        PAUSING: 112,

        // Service fully paused
        PAUSED: 113,

        // Service is running
        RUNNING: 115,

        // Unknown service status
        UNKNOWN: 117
}