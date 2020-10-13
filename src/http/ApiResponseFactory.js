const { ApiResponse } = require("./ApiResponse");
const { ApiResponseCode } = require("./ApiResponseCode");

exports.ApiResponseFactory = class ApiResponseFactory {
        static success(msg, data) {
                return new ApiResponse(
                        ApiResponseCode.SUCCESS,
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