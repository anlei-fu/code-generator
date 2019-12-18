

@Api(tags = "")
@RestController
public class TaskCookieConfigController {

    @Autowired
    private TaskCookieConfigService taskCookieConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskCookieConfig")
    public R addTaskCookieConfig(@Validated @ModelAttribute AddTaskCookieConfigReq req) {
        return R.doResponse(taskCookieConfigService.addTaskCookieConfig(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskCookieConfig/{id}")
    public R deleteTaskCookieConfigById(@PathVariable Integer id) {
        return R.doResponse(taskCookieConfigService.deleteTaskCookieConfigById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskCookieConfig/{id}")
    public R updateTaskCookieConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskCookieConfigByIdReq req) {
        return R.doResponse(taskCookieConfigService.updateTaskCookieConfigById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskCookieConfig/{id}")
    public R<TaskCookieConfig> getTaskCookieConfigById(@PathVariable Integer id) {
        return R.doResponse(taskCookieConfigService.getTaskCookieConfigById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskCookieConfig")
    public R<PageInfo<TaskCookieConfig>> getTaskCookieConfigList(@Validated @ModelAttribute GetTaskCookieConfigListReq req) {
        return R.doResponse(taskCookieConfigService.getTaskCookieConfigList(req));
    }
}
