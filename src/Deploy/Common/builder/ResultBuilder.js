class Result {
        constructor () {
                this.type = 0;
                this.description = "";
                this.log = "";
                this.code = 100;
        }

}

class ResultBuilder {
        constructor () {
                this._result = new Result();
        }

        type(type) {
                this._result.type = type;
                return this;
        }

        code(code) {
                this._result.code = code;
                return this;
        }

        info(info) {
                this._result.log += `[Info][${new Date().toLocaleString()}]\r\n`;
                this._result.log += info;
                return this;
        }

        error(error) {
                this._result.info += `[Error][${new Date().toLocaleString()}]\r\n`;
                this._result.log += `${error}`;
                return this;
        }

        appendResult(result){
                return this;
        }

        appendErrorResultAndBuild(errorDescription,errorResult){
                return this.build();
        }

        build() {
                return this._result;
        }
}

exports.ResultBuilder = ResultBuilder