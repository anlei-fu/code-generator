const { ApiResponse } = require("../po/model/ApiResponse");
const { ApiResponseCode } = require("../po/constant/ApiResponseCode");

exports.ApiResponseFactory = class ApiResponseFactory {
        static success(msg, data) {
                return new ApiResponse(
                        piResponseCode.SUCCESS,
                        msg || "operation succeed",
                        data
                );
        }

        static fail(code, msg) {
                return new ApiResponse(
                        code || ApiResponseCode.FAIELD,
                        msg || "operation failed",
                );
        }

        static systemError(msg, code) {
                return new ApiResponse(
                        code || ApiResponseCode.SYSTEM_ERROR,
                        msg || "system error"
                );
        }

}