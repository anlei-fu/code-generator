const { TaskResultCode: ResultCode } = require("../po/constant/TaskResultCode");
const { DeployContext } = require("../DeployClientContext")

const SCRIPTS = {
        INIT: "",
        DEPLOY: "",

}



class JavaProjectService {
        constructor () {
                this._context = new DeployContext();
        }
        async init(params) {
                let resultBuilder = this._context.factory
                        .newResultBuilder(`Init java project ${params.projectId} task`);

                let result = validateUtils.checkParamsNotNull(
                        params,
                        params.projectId,
                        params.name,
                        params.jarName);

                // check params
                if (result.code != 100)
                        return result;

                // check is project exist
                if (this.getProjectById(params.projectId)) {
                        // notify again
                        this._context.javaProjectNotifier.notifyProjectInitialized(params.projectId);

                        return resultBuilder.failedAndBuild(
                                "project all realdy exist at this node",
                                ResultCode.PROJECT_REPEAT);
                }

                // execute init script
                let result = await this._context.shellExcutor
                        .execute(SCRIPTS.INIT, [project.deployFolder, project.JarName]);
                if (result.code != 100)
                        return result;

                resultBuilder.info(result.log);

                // save to local and notify master node project initilized
                result = await this._context.db.javaProjectDdService.addProject(params);
                if (!result) {
                        return resultBuilder.code(ResultCode.ADD_FAILED)
                                .info(`table:project\r\n params:${JSON.stringify(params)}`)
                                .build();
                }

                // no need to check notify response
                this._context.javaProjectNotifier.notifyProjectInitialized(params.projectId);

                return resultBuilder.successAndBuild(`poject  id '${params.projectId}', name '${params.name}'`);
        }

        /**
         * Deploy new version of project
         * 
         * @param {Project} params 
         * @returns {Result}
         */
        deploy(params) {

                let resultBuilder = this._context.factory
                        .newResultBuilder(`Deploy java project ${params.projectId}`);

                // check params
                if (validateUtils.anyNull(params, params.projectId, params.version, params.targetFile)) {
                        let info = `params 'projectId','version','targetFile' is nullable ,but actual params is:\r\n`;
                        info += params ? JSON.stringify(params) : "null";
                        return resultBuilder.code(100)
                                .error(info)
                                .build();
                }

                let project = this.getProjectById(params.projectId);
                if (!project) {
                        let info = `project can not be found by projectId '${params.projectId}' at this node`;
                        return resultBuilder.code(100)
                                .error(info)
                                .build();
                }

                // check target version is already deployed 
                if (params.version == project.version) {
                        this._context.javaProjectNotifier.notifyProjectVersion(params.projectId, params.version);
                        return resultBuilder.code(100)
                                .error(`project version of this node  is already ${params.version}`)
                                .build();
                }

                // not first deploy, back up current version
                if (project.version) {
                        let result = await this._context.shellExcutor
                                .excute(SCRIPTS.DEPLOY, ["backup", project.version]);

                        // backup failed
                        if (result.code != 100) {
                                let info = `backup project '${project.name}',id '${project.id}' to version ${project.version} failed\r\n`;
                                info += result.log;
                                return resultBuilder.code(100)
                                        .info(info)
                                        .build();
                        }

                        resultBuilder.info(result.log);
                }

                // pull target version
                result = await this._context.fileManager.pull(project.deployFolder, params.targetFile);
                if (result.code != 100) {
                        let info = `pull project '${project.name}',id '${project.id}' target file ${params.targetFile} failed`
                        info += result.log;

                        return resultBuilder.code(100)
                                .info(info)
                                .build();
                }

                resultBuilder.info(result.log);

                // deploy 
                result = await this._context.shellExcutor
                        .excute(SCRIPTS.DEPLOY, ["deploy", project.fileName]);
                if (result.code != 100) {
                        let info = `deploy project '${project.name}',id '${project.id}' failed`
                        info += result.log;

                        // roll back 

                        return resultBuilder.code(100)
                                .info(info)
                                .build();
                }
                resultBuilder.info(result.log);

                // deploy finish

                // update local and master project info
                result = this.updateProjectInfo();
                // update project status of node in master node
                this._context.javaProjectNotifier.notifyProjectVersion(params.projectId, params.version);

                return result;
        }

        updateProjectStatus() {

        }

        updateProjectInfo() {

        }

        updateProjectFolder() {

        }


        deleteProjectById(projectId) {

        }

        async startProject(projectId) {
                let resultBuilder = this._context.factory
                        .newResultBuilder(`Deploy java project ${params.projectId}`);

                if (!projectId) {

                }

                let project = this.getProjectById(projectId);
                if (!project) {
                        this._context.javaProjectNotifier.notifyProjectDeleted(params.projectId);
                }

                let result = await this._context.shellExcutor
                        .excute(SCRIPTS.DEPLOY, ["start"]);
                if (result != 100) {

                }

                this.updateProjectStatus();

                return resultBuilder.build();

        }

        stopProject() {

        }

        getProjectStatus() {

        }

        listProject() {

        }
}