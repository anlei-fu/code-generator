/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-09 09:22:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 14:07:54
 */
class RequestHandlerBuilder {

        /**
         * Set property "path"
         * 
         * @param {String} path 
         * @returns {RequestHandlerBuilder}
         */
        path(path) {
                this._path = path;
                return this;
        }

        /**
         * Set property "description"
         * 
         * @param {String} description 
         * @returns {RequestHandlerBuilder}
         */
        description(description) {
                this._description = description;
                return this;
        }

        /**
         * Mark it a exportsExcel request handler
         * 
         * @returns {RequestHandlerBuilder}
         */
        exportsExcel() {
                this._exportsExcel = true;
                return this;
        }

        /**
         * Mark it a importsExcel request handler
         * 
         * @returns {RequestHandlerBuilder}
         */
        importsExcel() {
                this._importsExcel = true;
                return this;
        }

        /**
         *  Internal call
         */
        build() {
                return {
                        description: this._description,
                        path: this._path,
                        exportsExcel: this._exportsExcel,
                        importsExcel: this._importsExcel
                };
        }
}

exports.RequestHandlerBuilder = RequestHandlerBuilder;