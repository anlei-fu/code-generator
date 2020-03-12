const { DIR } = require("../../libs/dir");
const { FILE } = require("../../libs/file");
const { OBJECT } = require("../../libs/utils");
const fs = require("fs");
const { LoggerFactory } = require("./../logging/logger-factory");

const LOG = LoggerFactory.getLogger("file-snapshot");

/**
 * Record file modify status
 */
class FileSnapShot {

    /**
     * 
     * @param {String} project 
     * @param {Array} ignores
     */
    constructor (project, ignores = []) {
        this._ignores = ignores;
        this._snapshot = FILE.exists(`./output/${project.project}.js`)
            ? require(`./output/${project.project}.js`).snapshot || {}
            : {};
        this._project = project;
    }

    /**
     * Snapshot target folder files
     * 
     * @param {String} folder  of target (absolute path)
     */
    makeSnapshot(folder) {
        this._snapshot = this._makeSnapshotCore(folder);
        this._snapshot.createTime = new Date().toLocaleString();
        LOG.info("finish snapshot");
        this._writeSnapShot();

    }

    /**
     * Extract changed files since last snapshot
     * 
     * @param {String} folder of target folder
     * @param {String} outputFolder 
     */
    extractChangedFiles(folder, outputFolder) {
        let current = this._makeSnapshotCore(folder);
        let records;
        if (!this._snapshot) {
            records = current;
            this._snapshot = records;
        } else {
            records = this._extractAndMerge(this._snapshot, current);
        }
        DIR.remove(outputFolder);
        this._copy(records, outputFolder, folder);
        this._snapshot.modifyTime = new Date().toLocaleString();
        this._writeSnapShot();
        LOG.info("finish extract!");
    }

    /**
     * 
     * @param {String} folder  of target folder (absolute path)
     * @returns {{path:String,folders:{},files:{}}}
     */
    _makeSnapshotCore(folder) {
        let records = {};
        records.path = folder;

        // recursive analyze
        records.folders = {};
        DIR.getFolders(folder).forEach(x => {
            records.folders[x] = this._makeSnapshotCore(`${folder}/${x}`);
        });

        records.files = {};
        DIR.getFiles(folder).forEach(file => {

            // filts ignored file
            for (const matcher of this._ignores) {
                if (matcher(file)) {
                    LOG.info(`excluded file:${folder}/${file}`);
                    return;
                }
            }

            records.files[file] = {
                lastModify: fs.statSync(`${folder}/${file}`).mtime.toLocaleString(),
            }
        });

        return records;
    }

    /**
     * Extract changed file since last modify , update snapshot and delete removed file
     * 
     * @private
     * @param {SnapShot} old 
     * @param {SnapShot} _new 
     * @returns {SnapShot}
     */
    _extractAndMerge(old, _new) {
        let records = {
            files: {},
            folders: {},
            path: _new.path
        }
        old.files = old.files || {};
        old.folders = old.folders || {};

        Object.keys(_new.files).forEach(file => {

            // new or modified
            if (!old.files[file]
                || old.files[file].lastModify != _new.files[file].lastModify) {
                records.files[file] = _new.files[file];
                LOG.info(`add snapshot file:${_new.path}/${file}`);
            }

            old.files[file] = _new.files[file];
        });

        // delete removed file
        Object.keys(old.files).forEach(file => {
            if (!_new.files[file]) {
                delete old.files[file];
                LOG.info(`delete old snapshot file:${old.path}/${file}`);
            }
        });

        // analyze folders
        Object.keys(_new.folders).forEach(folder => {

            // new
            if (!old.folders[folder]) {
                records.folders[folder] = _new.folders[folder];
                old.folders[folder] = _new.folders[folder];
                LOG.info(`add snapshot folder:${old.path}/${folder}`);
            } else {

                // do recursive analyze
                let subFolder = this._extractAndMerge(old.folders[folder], _new.folders[folder]);
                if (Object.keys(subFolder.files).length != 0
                    || Object.keys(subFolder.folders).length != 0)
                    records.folders[folder] = subFolder;
            }
        });

        // delete removed folder
        Object.keys(old.folders).forEach(folder => {
            if (!_new.folders[folder]) {
                delete old.folders[folder];
                LOG.info(`delete old snapshot folder:${old.path}/${folder}`);
            }
        });

        return records;
    }

    /**
     * Do copy
     * 
     * @private
     * @param {Snapshot} records 
     * @param {String} outputFolder 
     */
    _copy(records, outputFolder, targetFolder) {
       
        if ((!records.files || Object.keys(records.files).length == 0)
            && (!records.folders || Object.keys(records.folders).length == 0))
            return;

        let folder = this._relative(records.path);
        DIR.create(folder);

        Object.keys(records.files).forEach(file => {
            FILE.copy(`${records.path}/${file}`, `${this._relative(records.path + "/" + file)}`);
        });

        Object.keys(records.folders).forEach(folder => {
            this._copy(records.folders[folder], `${outputFolder}`, `${records.path}`);
        });
    }

    _relative(targetPath) {
        return targetPath.replace(this._project.folder, `./output/${this._project.project}`);
    }

    /**
     * Write snapshot to file
     */
    _writeSnapShot() {
        DIR.create("output");
        FILE.write(`./output/${this._project.project}.js`, OBJECT.export_(this._snapshot, "snapshot", false))
    }
}

exports.FileSnapShot = FileSnapShot;