const { JavaProjectAccess } = require("./db/AppAccess");
const { TaskAccess } = require("./db/TaskAccess");
const { FileVersionAccess } = require("./db/FileVersionAccess");
const { validateUtils } = require("./../common/utils/validate-utils");

exports.AccessBuilder = class AccessBuilder {
        static build(sqlExcutor) {
                validateUtils.requireNotNull(sqlExcutor);

                return {
                        javaProjectAccess: new JavaProjectAccess(sqlExcutor),
                        taskAccess: new TaskAccess(sqlExcutor),
                        fileVersionAccess: new FileVersionAccess(sqlExcutor)
                }
        }
}