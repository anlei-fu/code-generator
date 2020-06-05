SCRIPT = {
        PULL: "",
}

class FileSystemVisitor {
        constructor (context, fileSystemHost) {
                this._context = context;
                this._fileSystemHost = fileSystemHost;
        }

        /**
         * Pull file into target folder from file-system 
         * Note:
         *    file already exists will be overwrite
         *    folder not exists will auto create 
         * @link ./shells/pullfile.sh
         * 
         * @param {string} targetFolder 
         * @param {string} targetFile 
         * @returns {Result}
         */
        pull(targetFolder, targetFile) {
                let pullResultBuilder = this._context.factory.newResultBuilder();
                pullResultBuilder.name(`Pull File '${targetFolder}' '${targetFile}' `);

                // excute shell
                let shellResult = this._context.shellExcuter
                        .execute(SCRIPTS.PULL, [targetFolder, `${this._fileSystemHost}/${targetFile}`]);

                return pullResultBuilder
                        .code(shellResult.code)
                        .info(shellResult.log)
                        .build();
        }
}