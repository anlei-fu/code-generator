

@Api(tags = "")
@RestController
public class TaskScriptConfigController {

    @Autowired
    private TaskScriptConfigService taskScriptConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskScriptConfig")
    public R addTaskScriptConfig(@Validated @ModelAttribute AddTaskScriptConfigReq req) {
        return R.doResponse(taskScriptConfigService.addTaskScriptConfig(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskScriptConfig/{id}")
    public R deleteTaskScriptConfigById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigService.deleteTaskScriptConfigById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskScriptConfig/{id}")
    public R updateTaskScriptConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskScriptConfigByIdReq req) {
        return R.doResponse(taskScriptConfigService.updateTaskScriptConfigById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfig/{id}")
    public R<TaskScriptConfig> getTaskScriptConfigById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigService.getTaskScriptConfigById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfig")
    public R<PageInfo<TaskScriptConfig>> getTaskScriptConfigList(@Validated @ModelAttribute GetTaskScriptConfigListReq req) {
        return R.doResponse(taskScriptConfigService.getTaskScriptConfigList(req));
    }
}
