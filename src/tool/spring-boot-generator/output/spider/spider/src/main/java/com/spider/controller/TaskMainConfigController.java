

@Api(tags = "")
@RestController
public class TaskMainConfigController {

    @Autowired
    private TaskMainConfigService taskMainConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskMainConfig")
    public R addTaskMainConfig(@Validated @ModelAttribute AddTaskMainConfigReq req) {
        return R.doResponse(taskMainConfigService.addTaskMainConfig(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskMainConfig/{id}")
    public R deleteTaskMainConfigById(@PathVariable Integer id) {
        return R.doResponse(taskMainConfigService.deleteTaskMainConfigById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskMainConfig/{id}")
    public R updateTaskMainConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskMainConfigByIdReq req) {
        return R.doResponse(taskMainConfigService.updateTaskMainConfigById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskMainConfig/{id}")
    public R<TaskMainConfig> getTaskMainConfigById(@PathVariable Integer id) {
        return R.doResponse(taskMainConfigService.getTaskMainConfigById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskMainConfig")
    public R<PageInfo<TaskMainConfig>> getTaskMainConfigList(@Validated @ModelAttribute GetTaskMainConfigListReq req) {
        return R.doResponse(taskMainConfigService.getTaskMainConfigList(req));
    }
}
