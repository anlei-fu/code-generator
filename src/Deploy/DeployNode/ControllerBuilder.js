const { JavaProjectController } = require("./controller/JavaProjectController");
const { TaskController } = require("./controller/TaskController");
const { validateUtils } = require("./../Common/utils/validate-utils");
const { AccessBase } = require("./../Common/AcccessBase");
const {FileVersionController} =require("./controller/FileVersionController");

exports.ControllerBuilder = class ControllerBuilder {
        /**
         * To build controllers
         * 
         * @param {AccessCollection} dbAccess 
         * @returns {ControllerCollection}
         */
        static build(dbAccess) {
                validateUtils.requireNotNull(
                        dbAccess,
                        "javaProjectAccess",
                        "taskAccess",
                        "fileVersionAccess"
                );

                validateUtils.requireInstanceOf(dbAccess.javaProjectAccess,AccessBase);
                validateUtils.requireInstanceOf(dbAccess.taskAccess,AccessBase);
                validateUtils.requireInstanceOf(dbAccess.fileVersionAccess,AccessBase);

                return [
                        new JavaProjectController(dbAccess.javaProjectAccess),
                        new TaskController(dbAccess.taskAccess),
                        new FileVersionController(dbAccess.fileVersionAccess)
                ]
        }
}