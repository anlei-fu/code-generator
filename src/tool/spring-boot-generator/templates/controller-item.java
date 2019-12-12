@Mapping("@path")
    @ApiOperation("@description")
    public @return @name(@params) {
            @content
        return R.doResponse(() -> service.@name(@serviceParams));
    }