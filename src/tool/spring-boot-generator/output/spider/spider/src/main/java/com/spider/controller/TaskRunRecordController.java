

@Api(tags = "")
@RestController
public class TaskRunRecordController {

    @Autowired
    private TaskRunRecordService taskRunRecordService;

    @ApiOperation("")
    @PostMapping(path = "/taskRunRecord")
    public R addTaskRunRecord(@Validated @ModelAttribute AddTaskRunRecordReq req) {
        return R.doResponse(taskRunRecordService.addTaskRunRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskRunRecord/{id}")
    public R deleteTaskRunRecordById(@PathVariable Integer id) {
        return R.doResponse(taskRunRecordService.deleteTaskRunRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskRunRecord/{id}")
    public R updateTaskRunRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskRunRecordByIdReq req) {
        return R.doResponse(taskRunRecordService.updateTaskRunRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskRunRecord/{id}")
    public R<TaskRunRecord> getTaskRunRecordById(@PathVariable Integer id) {
        return R.doResponse(taskRunRecordService.getTaskRunRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskRunRecord")
    public R<PageInfo<TaskRunRecord>> getTaskRunRecordList(@Validated @ModelAttribute GetTaskRunRecordListReq req) {
        return R.doResponse(taskRunRecordService.getTaskRunRecordList(req));
    }
}
