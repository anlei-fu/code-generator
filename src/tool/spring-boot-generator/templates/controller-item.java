@httpMapping
    @ApiOperation("@description")
    public @controllerReturnType @name(@controllerParams) {
        return R.doResponse(() -> service.@name(@serviceParams));
    }
    