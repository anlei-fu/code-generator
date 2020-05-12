@ApiOperation("@description")
    @httpMapping
    public @returnType @methodName(@args) {
        @serviceReturnType result =@snameService.@methodName(@serviceArgs);
        return R.doResponse(result,@failedMsg);
    }

    