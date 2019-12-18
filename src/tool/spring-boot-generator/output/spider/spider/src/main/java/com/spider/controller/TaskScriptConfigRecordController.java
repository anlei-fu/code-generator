

@Api(tags = "")
@RestController
public class TaskScriptConfigRecordController {

    @Autowired
    private TaskScriptConfigRecordService taskScriptConfigRecordService;

    @ApiOperation("")
    @PostMapping(path = "/taskScriptConfigRecord")
    public R addTaskScriptConfigRecord(@Validated @ModelAttribute AddTaskScriptConfigRecordReq req) {
        return R.doResponse(taskScriptConfigRecordService.addTaskScriptConfigRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskScriptConfigRecord/{id}")
    public R deleteTaskScriptConfigRecordById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigRecordService.deleteTaskScriptConfigRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskScriptConfigRecord/{id}")
    public R updateTaskScriptConfigRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskScriptConfigRecordByIdReq req) {
        return R.doResponse(taskScriptConfigRecordService.updateTaskScriptConfigRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfigRecord/{id}")
    public R<TaskScriptConfigRecord> getTaskScriptConfigRecordById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigRecordService.getTaskScriptConfigRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfigRecord")
    public R<PageInfo<TaskScriptConfigRecord>> getTaskScriptConfigRecordList(@Validated @ModelAttribute GetTaskScriptConfigRecordListReq req) {
        return R.doResponse(taskScriptConfigRecordService.getTaskScriptConfigRecordList(req));
    }
}
