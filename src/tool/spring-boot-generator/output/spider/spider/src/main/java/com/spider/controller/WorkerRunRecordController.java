

@Api(tags = "")
@RestController
public class WorkerRunRecordController {

    @Autowired
    private WorkerRunRecordService workerRunRecordService;

    @ApiOperation("")
    @PostMapping(path = "/workerRunRecord")
    public R addWorkerRunRecord(@Validated @ModelAttribute AddWorkerRunRecordReq req) {
        return R.doResponse(workerRunRecordService.addWorkerRunRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/workerRunRecord/{id}")
    public R deleteWorkerRunRecordById(@PathVariable Integer id) {
        return R.doResponse(workerRunRecordService.deleteWorkerRunRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/workerRunRecord/{id}")
    public R updateWorkerRunRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorkerRunRecordByIdReq req) {
        return R.doResponse(workerRunRecordService.updateWorkerRunRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workerRunRecord/{id}")
    public R<WorkerRunRecord> getWorkerRunRecordById(@PathVariable Integer id) {
        return R.doResponse(workerRunRecordService.getWorkerRunRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workerRunRecord")
    public R<PageInfo<WorkerRunRecord>> getWorkerRunRecordList(@Validated @ModelAttribute GetWorkerRunRecordListReq req) {
        return R.doResponse(workerRunRecordService.getWorkerRunRecordList(req));
    }
}
