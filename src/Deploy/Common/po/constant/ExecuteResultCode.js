exports.ExcuteResultCode = {

        // execute successfully
        SUCCESSED: 100,

        // the args give to task is incorrect
        ARGUMENT_INCORRECT: 101,

        // execute shell file failed
        EXECUTE_SHELL_FAILE: 102,

        // script file has not been found
        FILE_NOT_FOUND: 103,

        // shell script not found
        SHELL_NOT_FOUND: 104,

        // js script not found
        JS_NOT_FOUND: 105,

        // main function not found
        MAIN_NOT_FOUND: 106,

        // project not found
        PROJECT_NOT_FOUND: 109,

        // pull file failed
        PULL_FILE_FAILED: 117,

        // task already exists tell by the task id
        TASK_REPEAT: 120,

        // deploy already exists
        DEPLOY_REPEAT: 121,

        // project already exists
        PROJECT_REPEAT: 122,

        // task timeouted
        TIMEOUTED: 114,

        // unknow executing exception
        UNKONW_EXCEPTION: 120,

        // db erro
        DB: 130,

        // add into db failed
        ADD_FAILED: 131,

        // execute failed
        EXECUTE_FAILED: 140,

        //execute shell failed
        EXECUTE_SHELL_FAILED: 141,

        // execute js failed
        EXECUTE_JS_FAILED: 142,

        // js file incorrect
        JS_FILE_INCORRECT: 150
}