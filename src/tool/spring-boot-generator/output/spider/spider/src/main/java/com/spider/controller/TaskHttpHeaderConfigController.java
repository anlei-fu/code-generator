

@Api(tags = "")
@RestController
public class TaskHttpHeaderConfigController {

    @Autowired
    private TaskHttpHeaderConfigService taskHttpHeaderConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskHttpHeaderConfig")
    public R addTaskHttpHeaderConfig(@Validated @ModelAttribute AddTaskHttpHeaderConfigReq req) {
        return R.doResponse(taskHttpHeaderConfigService.addTaskHttpHeaderConfig(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskHttpHeaderConfig/{id}")
    public R deleteTaskHttpHeaderConfigById(@PathVariable Integer id) {
        return R.doResponse(taskHttpHeaderConfigService.deleteTaskHttpHeaderConfigById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskHttpHeaderConfig/{id}")
    public R updateTaskHttpHeaderConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskHttpHeaderConfigByIdReq req) {
        return R.doResponse(taskHttpHeaderConfigService.updateTaskHttpHeaderConfigById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskHttpHeaderConfig/{id}")
    public R<TaskHttpHeaderConfig> getTaskHttpHeaderConfigById(@PathVariable Integer id) {
        return R.doResponse(taskHttpHeaderConfigService.getTaskHttpHeaderConfigById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskHttpHeaderConfig")
    public R<PageInfo<TaskHttpHeaderConfig>> getTaskHttpHeaderConfigList(@Validated @ModelAttribute GetTaskHttpHeaderConfigListReq req) {
        return R.doResponse(taskHttpHeaderConfigService.getTaskHttpHeaderConfigList(req));
    }
}
