const { NodeContext } = require("../NodeContext");
const { Service } = require("../Service");
const { RestService } = require("../RestService");
const { TaskService } = require("../TaskService");
const { TYPE } = require("../utils/utils");
const { validateUtils } = require("../utils/validate-utils");
const { AccessBase } = require("../AcccessBase");

class NodeContextBuilder {
        constructor () {
                this._context = new NodeContext();
        }

        /**
         * config node info
         * 
         * @param {NodeInfo | (NodeContext ) => NodeInfo} config 
         * @returns {NodeContextBuilder}
         */
        withNodeInfo(config) {
                this._context.nodeInfo = config;
                return this;
        }

        /**
         * config  master node info
         * 
         * @param {MasterNodeInfo|((NodeContext) => MasterNodeInfo)} config 
         * @returns { NodeContextBuilder }
         */
        withMasterInfo(config) {
                this._context.masterNodeInfo = config;
                return this;
        }

        /**
         * Use rest service
         * 
         * @param { RestConfig | (NodeContext ) => RestService } config 
         * @returns {NodeContextBuilder}
         */
        useRestService(config) {
                if (TYPE.isFunction(config)) {
                        let service = config(this._context);
                        validateUtils.requireInstanceOf(service, RestService);
                        this._context.services.RestService = service;
                } else {
                        validateUtils.requireNotNull(config, "port", "controllers");
                        this._context.services.RestService = new RestService(port, controllers);
                }

                return this;
        }

        /**
         * Use task service
         * 
         * @param {TaskConfig|((NodeContext) => TaskService)} config 
         * @returns {NodeContextBuilder}
         */
        useTaskService(config) {
                if (TYPE.isFunction(config)) {
                        let service = config(this._context);
                        validateUtils.requireInstanceOf(service, TaskService);
                        this._context.services.TaskService = service;
                } else {
                        validateUtils.requireNotNull(config, "taskAccess", "taskExcutor", "taskConfig");
                        this._context.services.TaskService = new TaskService(config);
                }

                return this;
        }

        /**
         * Use access
         * 
         * @param {AccessBase|((NodeContext) => AccessBase)} config 
         * @returns {NodeContextBuilder}
         */
        useAccess(config) {
                let access = config;
                if (TYPE.isFunction(config))
                        access = config(this._context);

                validateUtils.requireNotNull(access, "name");
                validateUtils.requireInstanceOf(access, AccessBase);
                this._context.accesss[access.name] = access;

                return this;
        }

        /**
         * Use accesses
         * 
         * @param {[AccessBase]|((NodeContext) => [AccessBase])} config 
         * @returns {NodeContextBuilder}
         */
        useAccesses(config) {
                let accesses = config
                if (TYPE.isFunction(config))
                        accesses = config(this._context);

                accesses.forEach(a => {
                        validateUtils.requireNotNull(a, "name");
                        validateUtils.requireInstanceOf(a, AccessBase);
                        this._context.accesss[a.name] = a;
                });

                return this;
        }


        /**
         * Use service
         * 
         * @param { Service | ((NodeContext ) => Service)} config 
         * @returns {NodeContextBuilder}
         */
        useService(config) {
                let service = config;
                if (TYPE.isFunction(config))
                        service = config(this._context);

                validateUtils.requireInstanceOf(service, Service);
                validateUtils.requireNotNull(service, "name");
                this._context.services[service.name] = service;

                return this;
        }

        /**
         * Use services
         * 
         * @param {[Service] | ((NodeContext ) => [Service])} config 
         * @returns {NodeContextBuilder}
         */
        useServices(config) {
                let services = config;
                if (TYPE.isFunction(config))
                        services = config(this._context);

                services.forEach(s => {
                        validateUtils.requireNotNull(s, "name");
                        validateUtils.requireInstanceOf(s, Service);
                        this._context.services[s.name] = s;
                })

                return this;
        }

        /**
         * Use excutor
         * 
         * @param {Excutor|((NodeContext ) => Excutor)} config 
         * @returns {NodeContextBuilder}
         */
        useExcutor(config) {
                let excutor = config;
                if (TYPE.isFunction(config))
                        let excutor = config(this._context);

                validateUtils.requireNotNull(excutor, "name");
                this._context.excutors[excutor.name] = excutor;

                return this;
        }

        /**
         * Use excutors
         * 
         * @param {[Excutor]|((NodeContext ) => [Excutor])} config 
         * @returns {NodeContextBuilder}
         */
        useExcutors(config) {
                let excutors = config;
                if (TYPE.isFunction(config))
                        excutors = config(this._context);

                excutors.forEach(e => {
                        validateUtils.requireNotNull(e, "name");
                        this._context.excutors[e.name] = e;
                });

                return this;
        }

        /**
         * Use excutor
         * 
         * @param {Notifier | (NodeContext ) => Notifier} config 
         * @returns {NodeContextBuilder}
         */
        useNotifier(config) {
                let notifier = cconfig;
                if (TYPE.isFunction(config))
                        notifier = config(this._context);

                validateUtils.requireNotNull(notifier, "name");
                this._context.notifiers[notifier.name] = notifier;

                return this;
        }

        /**
         * Use notifier
         * 
         * @param {[Notifier] | (NodeContext ) => [Notifier]} config 
         * @returns {NodeContextBuilder}
         */
        useNotifiers(config) {
                let notifiers = config;
                if (TYPE.isFunction(config))
                        notifiers = config(this._context);

                notifiers.forEach(n => {
                        validateUtils.requireNotNull(n, "name");
                        this._context.notifiers[n.name] = n;
                });

                return this;
        }

        /**
         * Use manager
         * 
         * @param {Manager|(NodeContext)=>Manager} config 
         * @returns {NodeContextBuilder}
         */
        useManager(config) {
                let manager = config;
                if (TYPE.isFunction(config))
                        manager = config(this._context);

                validateUtils.requireNotNull(manager, "name");
                this._context.resourceManager[manager.name] = manager;

                return this;
        }

        /**
         * Use managers
         * 
         * @param {[Manager] | (NodeContext ) => [Manager]} config 
         * @returns {NodeContextBuilder}
         */
        useManagers(config) {
                let managers = config;
                if (TYPE.isFunction(config))
                        managers = config(this._context);

                managers.forEach(n => {
                        validateUtils.requireNotNull(n, "name");
                        this._context.managers[n.name] = n;
                });

                return this;
        }

        /**
         * Init and build
         * 
         * @returns {NodeContext}
         */
        build() {
             this._init(this._context.excutors);
             this._init(this._context.services);
             this._init(this._context.resourceManager);
             this._init(this._context.notifiers);
             this._init(this._context.services);

             return this._context;

        }

        /**
         * Init all initiable conponents with context
         * 
         * @param {{Initiables} collection 
         */
        _init(collection){
                Object.keys(collection).forEach(key=>{
                   collection[key].init(this._context);
                });
        }

}

exports.NodeContextBuilder = NodeContextBuilder;