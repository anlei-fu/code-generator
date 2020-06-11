const { ResourceManager } = require("../Common/manager/ResourceManager");
const { JsExcutor } = require("../Common/excutor/JsExcutor");
const { ShellFileExcutor } = require("../Common/excutor/ShellFileExcutor");
const { AccessBuilder } = require("./AcceesBuilder");
const { JavaProjectNotifier } = require("./notifiers/JavaProjectNotifier");
const { DeployNodeConfig } = require("./po/config/DeployNodeConfig");
const { SqliteExcutor } = require("../Common/excutor/SqliteExcutor");
const { LoggerFactory } = require("../Common/logging/logger-factory");
const { JobService } = require("../Common/JobService");

const { DIR } = require("../Common/utils/dir");
const { FILE } = require("../Common/utils/file");
const { validateUtils } = require("../Common/utils/validate-utils");


const LOG = LoggerFactory.getLogger("context-builder");



class DeployContext {

        /**
         * 
         * @param {DeployNodeConfig} config 
         */
        constructor (config) {

                this.config = config;

                this.nodeInfo = config.nodeInfo;

                // resource managers
                DIR.createMany(config.shellBaseFolder, config.jsBaseFolder);
                this.resourceManager = new ResourceManager(
                        config.jsBaseFolder,
                        config.shellBaseFolder
                );

                // excutors
                LOG.info("build excutors");
                this.excutors = {};
                this.excutor.jsExcutor = new JsExcutor(this);
                this.excutor.shellFileExcutor = new ShellFileExcutor(this);


                LOG.info("build db accesss")
                if (!config.dbFile)
                        FILE.write(config.dbFile, "");
                // db access
                this.dbAccesses = AccessBuilder.build(new SqliteExcutor(config.dbFile));

                LOG.info("config notifier");
                let masterRestConfig = config.masterRestConfig;
                validateUtils.requireNotNull(masterRestConfig, "host");

                this.notifiers = {};
                this.notifiers.javaProjectNotifier = new JavaProjectNotifier();

                this.jobService = new JobService();
        }


}

exports.DeployContext = DeployContext;