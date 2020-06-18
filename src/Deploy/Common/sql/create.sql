CREATE TABLE app (
    id                    INTEGER PRIMARY KEY
                                  NOT NULL,
    version               INTEGER,
    appType               INTEGER,
    status                INTEGER DEFAULT (3),
    name                  CHAR    NOT NULL,
    commond_script        CHAR,
    deploy_script         CHAR,
    last_runnig           DATE,
    need_health_check     INTEGER,
    health_check_interval INTEGER,
    health_chek_script    CHAR
);

CREATE TABLE task (
    id           INTEGER PRIMARY KEY
                         NOT NULL,
    status       INTEGER DEFAULT (1) 
                         NOT NULL,
    args         CHAR,
    task_type    INTEGER NOT NULL,
    start_time   DATE,
    finish_time,
    excute_count,
    script_file  CHAR,
    result_code  INTEGER,
    log          CHAR
);
