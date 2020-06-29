@ApiOperation("@description")
    @httpMapping
    public @returnType @methodName(@args) {
        int excepted = @excepted;
        int succeed = @snameService.@methodName(@serviceArgs);
        return R.responseBatch(excepted,succeed);
    }
