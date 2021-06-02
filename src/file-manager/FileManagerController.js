const { Controller } = require("../http");
const { ScriptServiceContext } = require("../rest-script/ScriptServiceContext");
const { FileManagerGroup } = require("./FileManagerGroup");
var multer = require('multer')
var upload = multer()

class FileManagerController extends Controller {
        constructor (root) {
                super("file-uploader");
                this._root = root;
                this._fileManagerGroup;
        }

        /**
        * Init file store service
        * 
        * @param {ScriptServiceContext} context 
        */
        init(context) {
                this._context = context;
                this._fileManagerGroup = new FileManagerGroup(this._root, context.config.fileManagers);
        }

        upload({ body, file, resp }) {
                let fileManager = this._fileManagerGroup.getManager(body.key);
                if (!fileManager){
                        return this.fail(`未知${body.key}对应的manager`);
                }

                try {
                        fileManager.write(file.originalname, file.buffer);
                        return resp.send({
                                msg: "上传成功",
                                code: 100
                        });

                } catch (ex) {
                        this.error("写入文件失败", ex);
                        return resp.send({
                                msg: "上传失败",
                                code: 200
                        });
                }

        }

        downloadFile(req, resp) {
                let fileManager = this._context.fileManagerGroup.getManager(req.body.key);
                if (!fileManager)
                        return this.fail(`未知${req.body.key}对应的manager`);

                resp.sendFile(fileManager.getFullPath(req.body.file));

                try {

                } catch (ex) {
                        this.error("下载文件失败", ex);

                        return resp.send({
                                msg: "上传失败",
                                code: 200
                        });
                }

        }

        readFile({ body }) {
                let fileManager = this._context.fileManagerGroup.getManager(body.key);
                if (!fileManager)
                        return this.fail(`未知${body.key}对应的manager`);

                return this.resposneObject(fileManager.read(body.file));
        }

        /**
        * To mount requests handler
        * 
        * @param {import("express").Express} express
        * @override
        */
        mount(express) {
                express.post("/upload",
                        upload.single('file'),
                        (req, resp) => this.upload({ body: req.body, file: req.file, resp })
                ).post(
                        "/download", (req, resp) => this.downloadFile(req, resp)
                ).post(
                        "/read",
                        (req, resp) => this._process(req, resp, this.readFile)
                );
        }
}

exports.FileManagerController = FileManagerController;