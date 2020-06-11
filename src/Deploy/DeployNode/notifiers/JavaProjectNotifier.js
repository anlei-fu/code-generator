const { HttpVisitor: HttpClient } = require("../HttpClient");

const Api={
        INIT:"/java/init/{projectId}",
        UPDATE_BY_ID:"/java/{projectId}",
}
class JavaProjectNotifier extends HttpVisitor {
        constructor (config) {
                super(config);
        }

        /**
         * Notify  master project has been initialized
         * 
         * @param {Number} projectId 
         * @returns {ApiResponse}
         */
        notifyProjectInitialized(projectId) {
                return this.put(Api.INIT,{projectId});
        }

        /**
         * Notify master node project has been deployed
         * 
         * @param {Number} projectId 
         * @param {String} version 
         * @returns {ApiResponse}
         */
        notifyProjectVersion(projectId, version) {
                return this._updateProjectById(projectId, { version });
        }

        /**
         * Notify master node project status changed
         * 
         * @param {Number} projectId 
         * @param {Number} status 
         * @returns {ApiResponse}
         */
        notifyProjectStatus(projectId, status) {
                return this._updateProjectById(projectId, { status });
        }

        /**
         * Notify master node project has been deleted
         * 
         * @param {Number} projectId 
         * @returns {ApiResponse}
         */
        notifyProjectDeleted(projectId) {
                return this.delete(`/project/java/${projectId}`);
        }

        /**
         * Update project info at master node
         * 
         * @param {Number} projectId 
         * @param {Any} fields 
         * @returns {ApiResponse}
         */
        _updateProjectById(projectId, fields) {
                return this.put(Api.UPDATE_BY_ID, fields);
        }
}

exports.JavaProjectNotifier = JavaProjectNotifier